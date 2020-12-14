import React from "react";
import styled from "styled-components";
import ClearButton from "./ClearButton";
import { ReloadButton } from "./ReloadButton";

const enableReload = false; // not implementing on public site

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin: 8px 0;
`;

export default function Controls(props) {
  const { handleClear, handleReload, url } = props;
  const clearDisabled = !url.length;
  return (
    <ButtonRow>
      <ButtonContainer>
        <ClearButton
          onClick={handleClear}
          disabled={clearDisabled}
          data-testid="button-clear"
        >
          Clear
        </ClearButton>
      </ButtonContainer>
      <ButtonContainer>
        {enableReload && (
          <ReloadButton onClick={handleReload}>Reload</ReloadButton>
        )}
      </ButtonContainer>
    </ButtonRow>
  );
}
