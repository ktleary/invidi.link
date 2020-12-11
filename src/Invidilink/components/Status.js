import React from "react";
import styled from "styled-components";

const StatusContainer = styled.div`
  color: rgba(255, 255, 255, 0.33);
  padding: 16px 0;
`;

export default function Status(props) {
  const { status } = props;
  return <StatusContainer>{status}</StatusContainer>;
}
