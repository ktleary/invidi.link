import React from "react";
import styled from "styled-components";
import ClearButton from "./buttons/ClearButton";
import RandomButton from "./buttons/RandomButton";
import ShowListButton from "./buttons/ShowListButton";

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin: 8px 8px;
`;

const Controls = ({
  handleClear,
  enableList,
  feelingLucky,
  url,
  urlIsValid,
}) => (
  <ButtonRow>
    <ButtonContainer>
      <ClearButton
        onClick={handleClear}
        disabled={!url.length}
        data-testid="button-clear"
      >
        CLEAR
      </ClearButton>
    </ButtonContainer>
    <ButtonContainer>
      <ShowListButton
        onClick={enableList}
        disabled={!urlIsValid}
        data-testid="button-random"
      >
        SHOW LIST
      </ShowListButton>
    </ButtonContainer>
    <ButtonContainer>
      <RandomButton
        onClick={feelingLucky}
        disabled={!urlIsValid}
        data-testid="button-random"
      >
        GO RANDOM!
      </RandomButton>
    </ButtonContainer>
  </ButtonRow>
);

export default Controls;
