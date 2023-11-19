import * as INDEX from "../constants/session-index";
export const processSessionData = (data) => {
  //split title row from data
  const sessions = data.splice(1);
  console.log(sessions);
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
    };
  });

  return returnArray;
};
