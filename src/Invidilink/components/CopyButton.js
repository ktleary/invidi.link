import styled from 'styled-components';

const CopyButton = styled.button`
  background: rgba(13, 71, 161, 0.76);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.78);
  height: 40px;
  outline: 0;
  width: 60px;
  &:disabled {
    background: rgba(49, 49, 49, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
  }
  &:disabled:hover {
    background: rgba(49, 49, 49, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
  }
  &:hover {
    background: rgba(13, 71, 161, 1);
    color: rgba(255, 255, 255, 1);
  }
`;

export default CopyButton;
