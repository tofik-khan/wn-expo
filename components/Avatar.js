import React from "react";
import styled from "styled-components";

const AvatarContainer = styled.div`
  width: ${(props) => (props.size === "lg" ? "120px" : "100px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StyledImage = styled.div`
  width: ${(props) => (props.size === "lg" ? "112px" : "92px")};
  height: ${(props) => (props.size === "lg" ? "112px" : "92px")};
  border-radius: 12px;
  background-image: url("${(props) => props.image}");
  background-size: cover;
  background-repeat: none;
`;

const StyledName = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${(props) => (props.size === "lg" ? "14px" : "12px")};
  line-height: 16px;
  margin: 2px 0px;
  width: ${(props) => (props.size === "lg" ? "112px" : "92px")};
`;

export const Avatar = ({ name, image, size }) => (
  <AvatarContainer size={size}>
    <StyledImage image={image} size={size} />
    <StyledName size={size}>{name}</StyledName>
  </AvatarContainer>
);
