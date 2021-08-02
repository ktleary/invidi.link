import styled from "styled-components";

const RandomButton = styled.button`
  background: rgba(13, 71, 161, 0.76); 
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.78);
  height: 32px;
  outline: 0;
  width: 108px;
  &:hover {
    background: rgba(13, 71, 161, 0.87);
    border: 1px solid rgba(255, 255, 255, 0.87);
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
  &:disabled {
    background: rgba(49, 49, 49, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
  }
  &:disabled:hover {
    background: rgba(49, 49, 49, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
    cursor: default;
  }
`;

export default RandomButton;
