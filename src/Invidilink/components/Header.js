import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: center;
  vertical-align: middle;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 0.33);
  margin: auto;
  font-size: 32px;
  font-family: sans-serif;
  font-weight: normal;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>invidilink</Title>
    </HeaderContainer>
  );
}
