import React from "react";
import styled from "styled-components";
import Countdown from "react-countdown";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  padding: 4px;

  background-color: #2457b288;
  color: white;

  margin-right: 8px;

  font-size: 28px;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

const StyledTitle = styled.h3`
  font-size: 12px;
  text-align: center;
`;

const renderer = ({ days, hours, minutes, seconds }) => {
  const DD = days < 10 ? `0${days}` : days;
  const HH = hours < 10 ? `0${hours}` : hours;
  const MM = minutes < 10 ? `0${minutes}` : minutes;
  const SS = seconds < 10 ? `0${seconds}` : seconds;
  // Render a countdown
  return (
    <StyledContainer>
      <StyledBlock>
        {DD}
        <StyledTitle>Days</StyledTitle>
      </StyledBlock>
      <StyledBlock>
        {HH}
        <StyledTitle>Hrs</StyledTitle>
      </StyledBlock>
      <StyledBlock>
        {MM}
        <StyledTitle>Min</StyledTitle>
      </StyledBlock>
      <StyledBlock>
        {SS}
        <StyledTitle>Sec</StyledTitle>
      </StyledBlock>
    </StyledContainer>
  );
};

export const CountdownTimer = ({ date }) => (
  <Countdown date={date} renderer={renderer} />
);
