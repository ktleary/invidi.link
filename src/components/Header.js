import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: center;
  vertical-align: middle;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 0.666);
  margin: auto;
  font-size: 32px;
  font-family: sans-serif;
  font-weight: normal;
`;

const HeaderLink = styled.a`
  color: rgba(255, 255, 255, 0.666);
  font-size: 32px;
  text-decoration: none;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderLink href="https://invidi.link">
      <Title>invidilink</Title>
    </HeaderLink>
  </HeaderContainer>
);

export default Header;
