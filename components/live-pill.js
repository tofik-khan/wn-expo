import React from "react";
import styled from "styled-components";
import { CheckCircle } from "react-bootstrap-icons";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 0px 8px;
  border: 3px solid red;
  border-radius: 20px;
  width: fit-content;
  color: red;

  -webkit-animation: pulsate-fwd 1s ease-in-out infinite both;
  animation: pulsate-fwd 1s ease-in-out infinite both;

  @-webkit-keyframes pulsate-fwd {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes pulsate-fwd {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export const Live = () => {
  return (
    <StyledContainer>
      <CheckCircle fill={"currentColor"} />
      Live
    </StyledContainer>
  );
};
