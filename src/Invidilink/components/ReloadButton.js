import styled from "styled-components";

const ReloadContainer = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: flex-start;
  line-height: 48px;
  margin: 0 8px;
  text-align: center;
  vertical-align: middle;
`;

const ReloadButton = styled.button`
  background: #1b5e20;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.78);
  height: 40px;
  outline: 0;
  width: 60px;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.87);
    color: #ffffff;
    cursor: pointer;
  }

  &:disabled {
    background: rgba(49, 49, 49, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
  }
  &:disabled:hover {
    background: rgba(49, 49, 49, 1);
    color: rgba(255, 255, 255, 0.3);
    cursor: default;
  }
`;

export { ReloadButton, ReloadContainer };
