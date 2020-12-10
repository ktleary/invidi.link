import React from 'react';
import styled from 'styled-components';
import { Input, InputContainer } from './Input';
import { SubmitButton, SubmitContainer } from './Submit';
import { validateUrl } from '../util';

const EntryContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.78);
  display: flex;
  height: 48px;
  line-height: 48px;
  justify-content: center;
  padding: 16px;
  vertical-align: middle;
`;

const placeholder = 'Youtube URL';

export default function Entry(props) {
  const { handleSubmit, url, setUrl } = props;
  const submitButtonDisabled = !validateUrl(url);
  const handleInputChange = (event) => {
    const { target } = event;
    if (!target) return;
    setUrl(target.value);
  };

  return (
    <EntryContainer>
      <InputContainer>
        <Input
          value={url}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </InputContainer>
      <SubmitContainer>
        <SubmitButton onClick={handleSubmit} disabled={submitButtonDisabled}>
          Submit
        </SubmitButton>
      </SubmitContainer>
    </EntryContainer>
  );
}
