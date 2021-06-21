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

const Controls = ({ handleClear, handleReload, url }) => (
  <ButtonRow>
    <ButtonContainer>
      <ClearButton
        onClick={handleClear}
        disabled={!url.length}
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

export default Controls;
