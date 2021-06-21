import React from "react";
import styled from "styled-components";
import CopyButton from "./CopyButton";

const CopyLinkButton = styled(CopyButton)`
  color: rgba(255, 255, 255, 0.5);
  height: 18px;
  width: 18px;
  :hover {
    color: rgba(255, 255, 255, 0.87);
  }
  &:active {
    color: rgba(255, 255, 255, 1);
  }
`;

const StyledLink = styled.a`
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  margin-left: 8px;

  text-decoration: none;
  &:hover {
    color: #81c784;
  }
  &:active {
    color: rgba(255, 255, 255, 1);
  }
  &:visited {
    color: #82b1ff;
  }
  &:visited:hover {
    color: #81c784;
  }
`;

const LinkContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  vertical-align: middle;
`;

const LinkCell = styled.div`
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  font-family: sans-serif;
  font-size: 11px;
  margin: 4px;
  overflow-wrap: break-word;
  text-align: left;

  /* wrapping long links css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container/ */

  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

const Link = ({ link, handleCopyLink }) => (
  <LinkContainer>
    <LinkCell
      onClick={() => handleCopyLink(link)}
      title="Copy Link"
      alt="Copy Link"
    >
      <CopyLinkButton data-testid="copy-button" />
    </LinkCell>
    <LinkCell>
      <StyledLink href={link}>{link}</StyledLink>
    </LinkCell>
  </LinkContainer>
);

export default Link;
