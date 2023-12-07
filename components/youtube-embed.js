import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const YoutubeEmbed = ({ embedId }) => {
  return (
    <VideoContainer>
      <iframe
        width={"853"}
        height={"480"}
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </VideoContainer>
  );
};
