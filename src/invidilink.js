import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Result from "./components/Result";
import Controls from "./components/Controls";
import Status from "./components/Status";
import About from "./components/About";
import Footer from "./components/Footer";
import copyToClipboard from "./utils/clipboard";
import { statusMessage } from "./utils/message";
import { NAVTYPE, STATUS } from "./constants";
import { parseInstancesResult } from "./utils/instance-data";
import { feelingLucky } from "./utils/random";
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
  padding-bottom: 24px;
  margin: 0;
  width: 100%;
`;

function Invidilink() {
  const [showAbout, setShowAbout] = useState(false);
  const [availableInstances, setAvailableInstances] = useState([]);
  const [url, setUrl] = useState("");
  const [navType, setNavType] = useState();
  const [status, setStatus] = useState("");

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

  const handleInputChange = (event) => event && setUrl(event.target.value);
  const handleClear = () => setUrl("");

  const handleReloadInstanceData = () => {};

  const enableList = () =>
    navType === NAVTYPE.LIST ? setNavType("") : setNavType(NAVTYPE.LIST);

  const toggleAbout = () => setShowAbout(!showAbout);
  const showList = navType === NAVTYPE.LIST && validateUrl(url);
  const urlIsValid = validateUrl(url);

  return (
    <InvidilinkWrapper data-testid="invidilink-wrapper">
      <Header />
      <Entry handleInputChange={handleInputChange} url={url} />

      <Result
        availableInstances={availableInstances}
        handleCopyLink={handleCopyLink}
        url={url}
        showList={showList}
      />

      <Status status={status} />
      <Controls
        url={url}
        handleClear={handleClear}
        handleReload={handleReloadInstanceData}
        feelingLucky={feelingLucky(availableInstances, url)}
        urlIsValid={urlIsValid}
        enableList={enableList}
      />
      {showAbout && <About toggleAbout={toggleAbout} />}
      <Footer data-testid="footer" toggleAbout={toggleAbout} />
    </InvidilinkWrapper>
  );
}

export default Invidilink;
