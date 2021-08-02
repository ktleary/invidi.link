import styled from 'styled-components';

const Input = styled.input`
  background: rgba(40, 46, 65, 1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.76);
  font-family: sans-serif;
  font-size: 16px;
  height: 32px;
  margin: 0;
  outline: none;
  padding: 8px;
  width: 100%;
`;

const InputContainer = styled.div`
  align-items: center;
  flex: 1;
  display: flex;
  height: 48px;
  line-height: 48px;
  justify-content: flex-end;
  margin: auto 8px;
  text-align: center;
  vertical-align: middle;
`;

export { Input, InputContainer };
