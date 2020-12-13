import React from "react";
import styled from "styled-components";

const StatusContainer = styled.div`
  border-bottom: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 0.33);
  font-size: 14px;
  height: 14px;
  margin: 0 auto 16px auto;
  padding: 0;
  text-align: center;
  width: 100%;
`;

export default function Status(props) {
  const { status } = props;
  return <StatusContainer>{status}</StatusContainer>;
}
