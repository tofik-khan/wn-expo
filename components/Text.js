import styled from "styled-components";

export const LightText = styled.p`
  color: #888888;
  font-size: ${(props) => {
    switch (props.size) {
      case "lg":
        return "24px";
      case "md":
        return "20px";
      case "small":
      default:
        return "16px";
    }
  }};
  text-wrap: nowrap;
  line-height: ${(props) => props.lineHeight ?? "inherit"};

  @media only screen and (max-width: 600px) {
    line-height: ${(props) => (props.lineHeight ? "16px" : "inherit")};
    text-wrap: wrap;
  }
`;

export const WhiteText = styled.p`
  color: white;
  font-size: ${(props) => {
    switch (props.size) {
      case "lg":
        return "24px";
      case "md":
        return "20px";
      case "small":
      default:
        return "16px";
    }
  }};
`;