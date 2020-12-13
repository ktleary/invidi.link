import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Result from "./components/Result";
import Controls from "./components/Controls";
import Status from "./components/Status";
import copyToClipboard from "./utils/clipboard";
import { statusMessage } from "./utils/message";
import { STATUS } from "./constants";
import { parseInstancesResult } from "./utils/instance-data";
import {
  getAvailableInstances,
  getQueryString,
  validateUrl,
} from "./utils/http";

const InvidilinkWrapper = styled.div`
  background: #1b1b1b;
  border: 0;
  color: rgba(255, 255, 255, 0.87);
  font-family: sans-serif;
  font-size: 100%;
  height: 100vh;
  outline: 0;
  overflow-y: auto;
  margin: 0;
  padding: 0 0 16px 0;
  width: 100%;
`;

function Invidilink() {
  const [url, setUrl] = useState("");
  const [availableInstances, setAvailableInstances] = useState([]);
  const [status, setStatus] = useState("");
  const handleClear = () => {
    setUrl("");
  };

  async function handleCopyLink(link) {
    const message = (await copyToClipboard(link))
      ? STATUS.LINKCOPIED
      : STATUS.CLIPBOARDNOTAVAILABLE;
    setStatus(statusMessage({ type: message }));
    setTimeout(() => {
      setStatus(
        statusMessage({
          type: STATUS.INSTANCESAVAILABLE,
          quantity: availableInstances.length,
        })
      );
    }, 2000);
  }

  const handleInputChange = (e) => {
    if (!e) return;
    const { target } = e;
    setUrl(target.value);
  };

  useEffect(() => {
    async function fetchInstanceData() {
      setStatus(STATUS.RETRIEVINGINSTANCES);
      const result = await getAvailableInstances();
      const [message, instances] = parseInstancesResult(result);
      setAvailableInstances(instances);
      setStatus(message);
    }

    const suppliedUrl = getQueryString("url");
    if (suppliedUrl) setUrl(suppliedUrl);
    fetchInstanceData();
  }, []);

  const handleReloadInstanceData = async () => {
    // fetchInstanceData();
  };

  return (
    <InvidilinkWrapper data-testid="invidilink-wrapper">
      <Header />
      <Entry handleInputChange={handleInputChange} url={url} />
      {validateUrl(url) && (
        <Result
          availableInstances={availableInstances}
          handleCopyLink={handleCopyLink}
          url={url}
        />
      )}
      <Status status={status} />
      <Controls
        url={url}
        handleClear={handleClear}
        handleReload={handleReloadInstanceData}
      />
    </InvidilinkWrapper>
  );
}

export default Invidilink;
