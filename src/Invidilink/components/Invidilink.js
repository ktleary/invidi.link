import React from "react";
import styled from "styled-components";
import copy from "../img/copy.svg";

const CopyButton = styled.button`
  border: 0;
  border-radius: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
  height: 32px;
  outline: 0;
  width: 32px;
`;

const Link = styled.a`
  color: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const LinkContainer = styled.div`
  align-items: center;
  display: flex;
  vertical-align: middle;
`;

const LinkCell = styled.div`
  color: rgba(255, 255, 255, 0.87);
  font-family: sans-serif;
  font-size: 11px;
  margin: 4px;
  text-align: left;
`;

const CopyIcon = styled.img`
  cursor: copy;
  fill: red;
  &:hover {
    filter: grayscale(100%) sepia(100%);
  }
`;

export default function Invidilink(props) {
  const { link, handleCopyLink } = props;
  return (
    <>
      <LinkContainer>
        <LinkCell>
          <CopyButton onClick={() => handleCopyLink(link)}>
            <CopyIcon src={copy} alt="Copy URL" title="Copy URL." />
          </CopyButton>
        </LinkCell>
        <LinkCell>
          <Link href={link} target="_blank">
            {link}
          </Link>
        </LinkCell>
      </LinkContainer>
    </>
  );
}
