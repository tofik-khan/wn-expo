import * as INDEX from "../constants/session-index";
import * as SPEAKER from "../constants/speaker-index";
export const processSessionData = (data) => {
  //split title row from data
  const sessions = data.splice(1);
  const returnArray = sessions.map((session) => {
    return {
      title: session[INDEX.TITLE],
      description: session[INDEX.DESCRIPTION],
      thumbnail: session[INDEX.THUMBNAIL],
      date: session[INDEX.DATE],
      startTime: session[INDEX.STARTTIME],
      endTime: session[INDEX.ENDTIME],
      link: session[INDEX.LINK],
      presenters: JSON.parse(session[INDEX.PRESENTERS]),
      published: session[INDEX.PUBLISHED] === "TRUE" ? true : false,
      room: session[INDEX.ROOM],
    };
  });

  return returnArray;
};

export const processSpeakerData = (data) => {
  const speakers = data.splice(1);
  const returnArray = speakers.map((speaker, index) => {
    return {
      name: speaker[SPEAKER.NAME],
      subtitle: speaker[SPEAKER.SUBTITLE],
      image: speaker[SPEAKER.IMAGE],
      description: speaker[SPEAKER.DESCRIPTION],
    };
  });
  return returnArray;
};