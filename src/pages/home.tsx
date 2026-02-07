import { SectionCTA } from "@/components/homepage/sections/CTA";
import { SectionHero } from "@/components/homepage/sections/hero";
import { Box } from "@mui/material";

export const PageHome = () => {
  return (
    <>
      <Box>
        <SectionHero />
        <SectionCTA />
      </Box>
    </>
  );
};
