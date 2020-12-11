import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Result from "./components/Result";
import Controls from "./components/Controls";

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

function processInstancesData(instancesData) {
  return (
    instancesData &&
    instancesData
      .filter(
        (instanceData) =>
          instanceData[1].stats &&
          instanceData[1].stats.version &&
          instanceData[1].monitor &&
          instanceData[1].monitor.statusClass === "success"
      )
      .map((successInstance) => successInstance[1].uri)
  );
}

async function getGoodInstances(remoteUrl) {
  const endpoint = remoteUrl || "https://instances.invidio.us/instances.json";
  try {
    const response = await fetch(endpoint);
    const instancesData = await response.json();
    return processInstancesData(instancesData);
  } catch (err) {
    return {
      status: `An error occurred while fetching results.`,
    };
  }
}

function Invidilink() {
  const [url, setUrl] = useState("");
  const [goodInstances, setGoodInstances] = useState([]);
  const [status, setStatus] = useState("");
  const handleClear = () => {
    setUrl("");
  };

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const url = params.get("url");
    if (url) setUrl(url);

    async function fetchData() {
      setStatus("Fetching instance data ...");
      const result = await getGoodInstances();
      setGoodInstances(result || []);
      result.status
        ? setStatus(`${result.status}`)
        : setStatus(`${result.length} invidious instances found.`);
    }
    fetchData();
  }, []);

  const handleReloadInstanceData = async () => {
    setStatus("Fetching instance data ...");
    const goodInstancesResult = await getGoodInstances();
    setGoodInstances(goodInstancesResult || []);
    setStatus(`${goodInstancesResult.length} invidious instances found.`);
  };

  return (
    <InvidilinkWrapper>
      <Header />
      <Entry setUrl={setUrl} url={url} />
      <Result status={status} goodUrls={goodInstances} url={url} />
      <Controls
        url={url}
        handleClear={handleClear}
        handleReload={handleReloadInstanceData}
      />
    </InvidilinkWrapper>
  );
}

export default Invidilink;
