import { Loading } from "@/components/Loading";
import { HourBlock } from "@/components/sesssions/HourBlock";
import { SessionModal } from "@/components/sesssions/SessionModal";
import { SESSION_INFO } from "@/constants/sessions";
import { useSessionsQuery } from "@/queries/session";
import { Box, Button, Container, Typography } from "@mui/material";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useState } from "react";

dayjs.extend(customParseFormat);
import { useNavigate, useParams } from "react-router";

export const PageSessions = () => {
  const { date } = useParams();
  const { isLoading, isRefetching, data, refetch } = useSessionsQuery(date);
  const navigate = useNavigate();

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
        {sortedData.length > 0 ? (
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
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
              <img
                src="/images/graphics/calendar.png"
                style={{ marginBlock: 2, width: "400px" }}
              />

              <Typography fontSize={"28px"} color="text.secondary">
                No Sessions available yet.
              </Typography>
              <Box>
                <Typography>
                  You will find the sessions for the Waqf-e-Nau EXPO here.
                </Typography>
                <Typography>
                  Please check back later for the list of scheduled sessions
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}
              >
                Return Home
              </Button>
            </Box>
          </>
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
