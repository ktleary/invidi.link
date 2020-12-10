import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { validateUrl } from '../util';
import Invidilink from './Invidilink';
import CopyButton from './CopyButton';
import ClearButton from './ClearButton';

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

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const ButtonContainer = styled.div`
  margin: 8px;
`;

function replaceUri(original, replacement) {
  const newUrl = new URL(original);
  const replacementUrl = new URL(replacement);
  newUrl.host = replacementUrl.host;
  return newUrl.href;
}

export default function Result(props) {
  const { handleClear, handleCopy, message, url, goodUrls } = props;
  const clearDisabled = !url.length;
  return (
    <ResultContainer>
      <Display>
        {validateUrl(url) && goodUrls.length ? (
          goodUrls.map((goodUrl) => (
            <Invidilink link={replaceUri(url, goodUrl)} key={nanoid()} />
          ))
        ) : (
          <Message>{message || 'the invidious link will appear here'}</Message>
        )}
      </Display>
      <ButtonRow>
        <ButtonContainer>
          <ClearButton onClick={handleClear} disabled={clearDisabled}>
            Clear
          </ClearButton>
        </ButtonContainer>
      </ButtonRow>
    </ResultContainer>
  );
}
