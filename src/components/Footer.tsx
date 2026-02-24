import { PhoneOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          background: `radial-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          minHeight: "100px",
          p: 3,
          color: "white",
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img src="/images/wn-logomark.png" width={"300px"} />
          <Typography
            color="secondary.light"
            variant="caption"
            fontSize={"14px"}
            sx={{ maxWidth: "750px", textAlign: "justify" }}
          >
            <Typography
              component={"span"}
              variant="subtitle2"
              color="secodary.dark"
              fontSize="32px"
            >
              &ldquo;
            </Typography>
            It is quite easy to proclaim that you are loyal to Allah the
            Almighty and willing to tolerate everything for His sake, but true
            faith is actually demonstrated when a person is tested and where
            real sacrifice is required.
            <br />
            &mdash; Hazrat Khalifatul Masih V (aba)
          </Typography>
        </Box>

        <Box
          sx={(theme) => ({
            my: 2,
            mx: "auto",
            width: "90%",
            height: "1px",
            backgroundColor: theme.palette.secondary.main,
          })}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            width: { xs: "100&", md: "80%" },
            gap: 2,
            mx: "auto",
          }}
        >
          <Typography>
            &copy; {new Date().getFullYear()} Waqf-e-Nau USA. All rights
            reserved
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Typography color="secondary">Need Assistance?</Typography>
            <Link href="tel:+18555963976" sx={{ color: "inherit" }}>
              <Typography display={"flex"} alignItems={"center"} gap={1}>
                <PhoneOutlined />
                1-855-596-3976
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
