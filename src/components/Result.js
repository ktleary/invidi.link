import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Link from "./Link";
import { replaceUri } from "../utils/http";

const ResultContainer = styled.div`
  padding: 8px 8px;
`;

const Display = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: block;
  margin: 16px;
  margin-bottom: 8px;
  text-align: center;
  vertical-align: middle;
`;

const id = nanoid();

const Result = ({ availableInstances, handleCopyLink, showList, url }) =>
  showList ? (
    <ResultContainer>
      <Display>
        {availableInstances.map((availableInstance, idx) => (
          <Link
            handleCopyLink={handleCopyLink}
            link={replaceUri(url, availableInstance)}
            key={`result-${id}-${idx}`}
          />
        ))}
      </Display>
    </ResultContainer>
  ) : null;

export default Result;
