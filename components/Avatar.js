import React from "react";
import styled from "styled-components";

const AvatarContainer = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StyledImage = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 12px;
  background-image: url("${(props) => props.image}");
  background-size: cover;
  background-repeat: none;
`;

const StyledName = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 12px;
  line-height: 16px;
  margin: 2px 0px;
  width: 72px;
`;

export const Avatar = ({ name, image }) => (
  <AvatarContainer>
    <StyledImage image={image} />
    <StyledName>{name}</StyledName>
  </AvatarContainer>
);
