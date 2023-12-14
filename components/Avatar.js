import React from "react";
import styled from "styled-components";
import { LightText } from "./Text";

const AvatarContainer = styled.div`
  width: ${(props) => (props.size === "lg" ? "120px" : "100px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &:hover {
    cursor: ${(props) => {
      return props.onClick !== null || props.onClick !== undefined
        ? "pointer"
        : "default";
    }};
  }
`;

const StyledImage = styled.div`
  width: ${(props) => {
    switch (props.size) {
      case "xl":
        return "150px";
        break;
      case "lg":
        return "112px";
        break;
      case "md":
      default:
        return "92px";
        break;
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case "xl":
        return "150px";
        break;
      case "lg":
        return "112px";
        break;
      case "md":
      default:
        return "92px";
        break;
    }
  }};
  border-radius: 12px;
  background-image: url("${(props) => props.image}");
  background-size: cover;
  background-repeat: none;
`;

const StyledName = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${(props) => {
    switch (props.size) {
      case "xl":
        return "18px";
        break;
      case "lg":
        return "16px";
        break;
      case "md":
      default:
        return "12px";
        break;
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case "xl":
        return "20px";
        break;
      case "lg":
        return "20px";
        break;
      case "md":
      default:
        return "16px";
        break;
    }
  }};
  margin: ${(props) => {
    switch (props.size) {
      case "xl":
        return "6px 0px";
        break;
      case "lg":
        return "4px 0px";
        break;
      case "md":
      default:
        return "2px 0px";
        break;
    }
  }};
  width: ${(props) => {
    switch (props.size) {
      case "xl":
        return "150px";
        break;
      case "lg":
        return "112px";
        break;
      case "md":
      default:
        return "92px";
        break;
    }
  }};
`;

export const Avatar = ({ name, image, size, subtitle, onClick }) => (
  <AvatarContainer size={size} onClick={onClick}>
    <StyledImage image={image} size={size} />
    <StyledName size={size}>{name}</StyledName>
    {subtitle && <LightText size={"sm"}>{subtitle}</LightText>}
  </AvatarContainer>
);
