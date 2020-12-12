import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Link from "./Link";

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

function replaceUri(original, replacement) {
  const newUrl = new URL(original);
  const replacementUrl = new URL(replacement);
  newUrl.host = replacementUrl.host;
  return newUrl.href;
}

export default function Result(props) {
  const { availableInstances, handleCopyLink, url } = props;

  return (
    <ResultContainer>
      <Display>
        {availableInstances.map((availableInstance) => (
          <Link
            handleCopyLink={handleCopyLink}
            link={replaceUri(url, availableInstance)}
            key={nanoid()}
          />
        ))}
      </Display>
    </ResultContainer>
  );
}
