import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const AboutContainer = styled.div`
  background: #333;

  font-size: 14px;
  margin: auto;
  max-width: 350px;
  opacity: 1;
  padding: 0 8px;
  position: absolute;
  bottom: 24px;
  right: 0;
  left: 0;
`;

const AboutHeader = styled.div`
  background: #333333;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  height: 32px;
  justify-content: right;
  line-height: 32px;
  text-align: right;
  vertical-align: middle;
  width: 100%;
`;

const AboutLink = styled.a`
  color: rgba(255, 255, 255, 0.87);
  text-decoration: none;
  :hover {
    color: rgba(255, 255, 255, 1);
    text-decoration: underline;
  }
  &:active {
    color: rgba(255, 255, 255, 1);
  }
`;

const AboutContent = styled.div`
  padding: 16px 16px;
`;

const CloseAboutButton = styled(CloseButton)`
  align-items: center;
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
  height: 18px;
  width: 18px;
  :hover {
    color: rgba(255, 255, 255, 1);
  }
  &:active {
    color: rgba(255, 255, 255, 1);
  }
`;

const CloseContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  height: 32px;
  line-height: 32px;
  justify-content: right;
  margin-right: 8px;
  text-align: right;
  vertical-align: middle;
`;

const SubtitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 32px;
  line-height: 32px;
  margin-left: 16px;
  text-align: left;
  vertical-align: middle;
`;

const About = ({ toggleAbout }) => (
  <AboutContainer>
    <AboutHeader>
      <SubtitleContainer>About</SubtitleContainer>
      <CloseContainer onClick={toggleAbout} data-testid="button-close">
        <CloseAboutButton />
      </CloseContainer>
    </AboutHeader>
    <AboutContent>
      <div>
        invidilink is a free, open-source tool written in React and licensed
        under GPL-3.
      </div>
      <p>
        invidi.link repects user privacy. No analytics or third-party trackers
        are used and no data is sent to the server. The application works by
        downloading server uptime data from invidious.io and all transformed
        urls are created in the browser.
      </p>
      <p>
        To report an issue, contribute or contact development, please visit:
        &nbsp;
        <AboutLink target="_blank" href="https://sr.ht/~djlooop/invidi.link/">
          https://sr.ht/~djlooop/invidi.link/
        </AboutLink>
      </p>
    </AboutContent>
  </AboutContainer>
);

export default About;
