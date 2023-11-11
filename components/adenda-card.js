import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Live } from "./live-pill";
import { Avatar } from "./Avatar";
import { isLive } from "../helpers/time";
import moment from "moment-timezone";

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
  min-height: 170px;
  object-fit: cover;

  padding: 4px;

  border-radius: 16px;
`;

const StyledBody = styled.div`
  padding: 8px;
  width: 100%;
  min-height: 170px;

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

const Title = styled.h2`
  text-align: left;
  font-size: 20px;
`;

const Description = styled.p`
  font-size: 12px;
  color: #888888;
  width: 100%;
  text-align: left;
`;

const PresenterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MorePresentersContainers = styled.p`
  font-size: 12px;
  color: #888888;
  margin: 0;
  font-weight: bold;
`;

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
  // Create a deep copy of presenters because the splice is removing elements from original array
  presenters = JSON.parse(JSON.stringify(presenters));
  // Apparently this has to be done before the splice otherwise the splice changes the original array. JS is not JSing.
  const morePresenters =
    presenters.length > 2 ? `+ ${presenters.length - 2} more` : "";
  const presentersToDisplay = presenters.splice(0, 2);

  const [time, updateTime] = useState(
    moment().tz("America/New_York").format("YYYY-MM-DD hh:mma")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime(moment().tz("America/New_York").format("YYYY-MM-DD hh:mma"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledContainer>
      <StyledThumbnail src={thumbnail} />
      <StyledBody>
        <div>
          <StyledTimeContainer>
            <Time>{`${startTime} - ${endTime}`}</Time>
            {isLive(`${date} ${startTime}`, time, `${date} ${endTime}`) && (
              <Live />
            )}
          </StyledTimeContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <div>
          <PresenterContainer>
            {presentersToDisplay.map((presenter, index) => (
              <Avatar
                key={`presenter-${index}`}
                name={presenter.name}
                image={presenter.image}
              />
            ))}
          </PresenterContainer>
          <MorePresentersContainers>{morePresenters}</MorePresentersContainers>
        </div>
      </StyledBody>
    </StyledContainer>
  );
};
