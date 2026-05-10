//import { SectionCTA } from "@/components/homepage/sections/cta";
import { SectionHero } from "@/components/homepage/sections/hero";
import { SectionInfo } from "@/components/homepage/sections/info";
import { SectionPartners } from "@/components/homepage/sections/partners";
import { SectionReport } from "@/components/homepage/sections/report";
import { SectionSurvey } from "@/components/homepage/sections/survey";
import { SectionVenue } from "@/components/homepage/sections/venue";
import { Box } from "@mui/material";

export const PageHome = () => {
  return (
    <>
      <Box>
        <SectionHero />
        <SectionSurvey />
        <SectionInfo />
        <SectionVenue />
        <SectionReport />
        <SectionPartners />
      </Box>
    </>
  );
};
