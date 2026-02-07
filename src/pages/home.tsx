import { SectionCTA } from "@/components/homepage/sections/CTA";
import { SectionHero } from "@/components/homepage/sections/hero";
import { SectionInfo } from "@/components/homepage/sections/info";
import { SectionPartners } from "@/components/homepage/sections/partners";
import { SectionVenue } from "@/components/homepage/sections/venue";
import { Box } from "@mui/material";

export const PageHome = () => {
  return (
    <>
      <Box>
        <SectionHero />
        <SectionCTA />
        <SectionInfo />
        <SectionVenue />
        <SectionPartners />
      </Box>
    </>
  );
};
