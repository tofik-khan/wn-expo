import React from "react";
import styled from "styled-components";
import { Live } from "./live-pill";

const StyledContainer = styled.button`
  color: unset;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  padding: 0;

  background-color: transparent;
  background-image: none;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid rgba(82, 82, 128, 0.18);
  border-radius: 16px;

  &:hover {
    background-color: #f7f7fc;
  }
`;

const StyledThumbnail = styled.img`
  width: 300px;
  height: 170px;
  object-fit: cover;

  border-radius: 16px;
`;

const StyledBody = styled.div`
  padding: 8px;
  width: 100%;
  height: 170px;

  display: flex;
  flex-direction: row;
`;

const StyledTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
`;

const Time = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  color: #222230;

  padding: 8px;
`;

const Title = styled.h2``;

export const AgendaCard = ({
  title,
  description,
  date,
  startTime,
  endTime,
  presenters,
  thumbnail,
  onClick,
}) => {
  return (
    <StyledContainer>
      <StyledThumbnail src={thumbnail} />
      <StyledBody>
        <div>
          <StyledTimeContainer>
            <Time>{`${startTime} - ${endTime}`}</Time>
            <Live />
          </StyledTimeContainer>
          <Title>{title}</Title>
        </div>
        <div>PresenterContainer</div>
      </StyledBody>
    </StyledContainer>
  );
};
