import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background: rgba(37, 43, 59, 1);
  display: flex;
  height: 24px;
  justify-content: center;
  padding: 8px;
  opacity: 1;
  /* stick to bottom */
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
`;

const FooterCell = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  padding: 5px;
  text-align: center;
  vertical-align: middle;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: rgba(255, 255, 255, 1);
    text-decoration: underline;
  }
  &:active {
    color: rgba(255, 255, 255, 1);
  }
`;

const Footer = ({ toggleAbout }) => (
  <FooterContainer>
    <FooterCell>GPL-3</FooterCell>
    <FooterCell onClick={toggleAbout}>
      <FooterLink data-testid="about-link">About & Privacy</FooterLink>
    </FooterCell>
  </FooterContainer>
);

export default Footer;
