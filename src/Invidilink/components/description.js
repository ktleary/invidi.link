import React from "react";
import styled from "styled-components";

const DescriptionWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;
const DescriptionContent = styled.p``;

const Description = () => (
  <DescriptionWrapper>
    <DescriptionContent>
      Invidi.link is a tool to convert Youtube (or other invidious links) to an{" "}
      <a hef="https://invidious.io">invidious</a> instance URL. It works by
      retrieving available instances from an api and replacing them with youtube
      video id.
    </DescriptionContent>
    <DescriptionContent>
      To see a list of the video at available instances, click "SHOW LIST" or
      use "GO RANDOM!" to be redirected to a random instance. Generally, it is
      better to use the random function to better distribute the load across all
      instances, though sometimes smaller instance experience frequent
      volatility and you may want to select your favorite instance from the
      list.
    </DescriptionContent>
  </DescriptionWrapper>
);

export default Description;
