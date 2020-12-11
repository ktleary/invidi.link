import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Result from "./components/Result";
import Controls from "./components/Controls";
import { Status } from "./components/Status";
import { statusMessage } from "../utils/message";
import { processInstancesData } from "../utils/instance-data";
import { endpoint, STATUS } from "../constants";
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

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function Invidilink() {
  const [url, setUrl] = useState("");
  const [availableInstances, setAvailableInstances] = useState([]);
  const [status, setStatus] = useState("");
  const handleClear = () => {
    setUrl("");
  };

  function getGoodInstances() {
    return fetch(endpoint)
      .then(handleErrors)
      .then((response) => processInstancesData(response))
      .catch((error) => setStatus(STATUS.ERRORRETRIEVING));
  }

  function handleCopyLink(link) {
    if (!navigator.clipboard) return;
    navigator.clipboard
      .writeText(link)
      .then((_) => {
        // setTimeout(() => setLinkCopied(false), 2000);
      })
      .catch((e) => {
        /* clipboard not available */
      });
  }

  async function fetchData() {
    setStatus(STATUS.RETRIEVINGINSTANCES);
    const result = await getGoodInstances();

    result.status
      ? setAvailableInstances([]) &&
        setStatus(statusMessage(STATUS.ERRORRETRIEVING))
      : setAvailableInstances(result) &&
        setStatus(statusMessage(STATUS.INSTANCESAVAILABLE, result.length));
  }

  useEffect(() => {
    const url = getQueryString("url");
    if (url) setUrl(url);
    fetchData();
  }, []);

  const handleReloadInstanceData = async () => {
    fetchData();
  };

  return (
    <InvidilinkWrapper>
      <Header />
      <Entry setUrl={setUrl} url={url} />
      <Result
        availableInstances={availableInstances}
        handleCopyLink={handleCopyLink}
        url={url}
        validateUrl={validateUrl}
      />
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
