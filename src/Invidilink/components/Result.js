import React from "react";
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

const Message = styled.div`
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
  const { message, url, goodUrls } = props;
  return (
    <ResultContainer>
      <Display>
        {validateUrl(url) && goodUrls.length ? (
          goodUrls.map((goodUrl) => (
            <Invidilink link={replaceUri(url, goodUrl)} key={nanoid()} />
          ))
        ) : (
          <Message>{message || "invidious links will appear here"}</Message>
        )}
      </Display>
    </ResultContainer>
  );
}
