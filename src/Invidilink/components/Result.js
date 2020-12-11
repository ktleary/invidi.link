import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { validateUrl } from "../util";
import Invidilink from "./Invidilink";

const ResultContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.78);
  padding: 8px 8px;
`;

const Display = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: block;
  margin: 16px;
  text-align: center;
  vertical-align: middle;
`;

const Status = styled.div`
  color: rgba(255, 255, 255, 0.33);
  padding: 16px 0;
`;

function replaceUri(original, replacement) {
  const newUrl = new URL(original);
  const replacementUrl = new URL(replacement);
  newUrl.host = replacementUrl.host;
  return newUrl.href;
}

export default function Result(props) {
  const { status, url, goodUrls } = props;
  const [linkCopied, setLinkCopied] = useState(false);
  const handleCopyLink = (link) => {
    if (!navigator.clipboard) return;
    navigator.clipboard
      .writeText(link)
      .then((_) => {
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
      })
      .catch((e) => {});
  };
  return (
    <ResultContainer>
      <Display>
        {validateUrl(url) && goodUrls.length ? (
          goodUrls.map((goodUrl) => (
            <Invidilink
              handleCopyLink={handleCopyLink}
              link={replaceUri(url, goodUrl)}
              key={nanoid()}
            />
          ))
        ) : (
          <Status>{status}</Status>
        )}
        {linkCopied && <Status>link copied!</Status>}
      </Display>
    </ResultContainer>
  );
}
