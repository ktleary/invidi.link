import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Result from "./components/Result";
import Controls from "./components/Controls";
import Status from "./components/Status";
import { statusMessage } from "./utils/message";
import { endpoint, STATUS } from "./constants";
import {
  getQueryString,
  processInstancesData,
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
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
`;

function Invidilink() {
  const [url, setUrl] = useState("");
  const [availableInstances, setAvailableInstances] = useState([]);
  const [status, setStatus] = useState("");
  const handleClear = () => {
    setUrl("");
  };

  async function getAvailableInstances() {
    const result = await fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch((err) => {
        console.log(err);
        setStatus(statusMessage({ type: STATUS.ERRORRETRIEVING }));
      });
    return processInstancesData(result);
  }

  function handleCopyLink(link) {
    if (!navigator.clipboard) return;
    navigator.clipboard
      .writeText(link)
      .then((_) => {
        setStatus(statusMessage(STATUS.LINKCOPIED));
        setTimeout(() => setStatus(""), 2000);
      })
      .catch((e) => {
        setStatus(statusMessage(STATUS.CLIPBOARDNOTAVAILABLE));
        setTimeout(() => setStatus(""), 2000);
      });
  }

  useEffect(() => {
    async function fetchInstanceData() {
      setStatus(STATUS.RETRIEVINGINSTANCES);
      const result = await getAvailableInstances();
      if (result) {
        setAvailableInstances(result);
        setStatus(
          statusMessage({
            type: STATUS.INSTANCESAVAILABLE,
            quantity: result.length,
          })
        );
      }
    }

    const suppliedUrl = getQueryString("url");
    if (suppliedUrl) setUrl(suppliedUrl);

    fetchInstanceData();
  }, []);

  const handleReloadInstanceData = async () => {
    // fetchInstanceData();
  };

  return (
    <InvidilinkWrapper>
      <Header />
      <Entry setUrl={setUrl} url={url} />
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
