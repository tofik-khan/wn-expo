import styled from "styled-components";

export const LightText = styled.p`
  color: #888888;
  font-size: ${(props) => {
    switch (props.size) {
      case "lg":
        return "20px";
      case "md":
        return "16px";
      case "small":
      default:
        return "12px";
    }
  }};
`;
