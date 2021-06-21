import styled from "styled-components";

const RandomButton = styled.button`
  background: rgba(64, 99, 66, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.78);
  height: 40px;
  outline: 0;
  width: 128px;
  &:hover {
    background: rgba(64, 99, 66, 1);
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
