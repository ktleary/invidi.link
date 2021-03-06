import React from "react";
import styled from "styled-components";
import { Input, InputContainer } from "./Input";

const EntryContainer = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  line-height: 48px;
  justify-content: center;
  padding: 16px;
  vertical-align: middle;
`;

const placeholder = "Enter a YouTube or Invidious URL.";

const Entry = ({ url, handleInputChange }) => (
  <EntryContainer>
    <InputContainer>
      <Input
        value={url}
        onChange={handleInputChange}
        placeholder={placeholder}
        data-testid="input-entry"
        autoFocus
      />
    </InputContainer>
  </EntryContainer>
);

export default Entry;
