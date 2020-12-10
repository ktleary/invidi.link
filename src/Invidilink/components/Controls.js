import React from "react";
import styled from "styled-components";
import ClearButton from "./ClearButton";
import { ReloadButton } from "./ReloadButton";

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const ButtonContainer = styled.div`
  margin: 8px;
`;

export default function Controls(props) {
  const { handleClear, handleReload, url } = props;
  const clearDisabled = !url.length;
  return (
    <ButtonRow>
      <ButtonContainer>
        <ClearButton onClick={handleClear} disabled={clearDisabled}>
          Clear
        </ClearButton>
      </ButtonContainer>
      <ButtonContainer>
        <ReloadButton onClick={handleReload}>Reload</ReloadButton>
      </ButtonContainer>
    </ButtonRow>
  );
}
