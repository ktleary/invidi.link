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
  font-size: 40px;
  font-family: sans-serif;
  font-weight: normal;
`;

const SubTitle = styled.h1`
  color: rgba(255, 255, 255, 0.666);
  margin: 16px auto;
  font-size: 24px;
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
      <Title>invidi.link</Title>
      <SubTitle>Convert YouTube links to Invidious.</SubTitle>
    </HeaderLink>
  </HeaderContainer>
);

export default Header;
