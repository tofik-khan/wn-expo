import { Loading } from "@/components/Loading";
import { HourBlock } from "@/components/sesssions/HourBlock";
import { SessionModal } from "@/components/sesssions/SessionModal";
import { SESSION_INFO } from "@/constants/sessions";
import { useSessionsQuery } from "@/queries/session";
import { Container, Typography } from "@mui/material";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useState } from "react";

dayjs.extend(customParseFormat);
import { useParams } from "react-router";

export const PageSessions = () => {
  const { date } = useParams();
  const { isLoading, isRefetching, data, refetch } = useSessionsQuery(date);

  useEffect(() => {
    refetch();
  }, [date]);

  const [session, setSession] = useState(null);

  if (isLoading || isRefetching) return <Loading />;

  const sortedData = data.sort((a, b) => {
    const timeA = dayjs(a._id, "h:mm a");
    const timeB = dayjs(b._id, "h:mm a");

    return timeA.valueOf() - timeB.valueOf();
  });

  const sessionData =
    SESSION_INFO.find((session) => session.date === date) ?? SESSION_INFO[0];

  return (
    <>
      <Container
        maxWidth="xl"
        sx={(theme) => ({
          backgroundColor: theme.palette.grey[50],
          marginY: 3,
          p: 5,
        })}
      >
        {sessionData.title}
        <Typography variant="subtitle1">{sessionData.venue}</Typography>
        {sortedData.length > 1 ? (
          sortedData.map((hourblock) => {
            return (
              <HourBlock
                key={hourblock._id}
                data={hourblock}
                onClick={(session) => {
                  setSession(session);
                }}
              />
            );
          })
        ) : (
          <Typography>No Sessions for this day</Typography>
        )}
      </Container>
      <SessionModal
        open={session !== null}
        onClose={() => setSession(null)}
        session={session}
      />
    </>
  );
};
