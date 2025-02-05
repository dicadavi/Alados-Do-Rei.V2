"use client";
import React, { useContext, useState } from "react";
import { Box, Container, Divider } from "@mui/material";
import { ModeContext } from "../../app/context/ModeProvider";
import AppAppBar from "../layout/AppAppBar";
import Hero from "../common/Hero";
import LogoCollection from "../common/LogoCollection";
import Highlights from "../common/Highlights";
import Pricing from "../common/Pricing";
import Features from "../common/Features";
import Testimonials from "../common/Testimonials";
import FAQ from "../common/FAQ";
import Footer from "../layout/Footer";
// import ToggleCustomTheme from "./ToggleCustomTheme"; // Supondo que você queira manter a customização

export default function LandingPage() {
  const { mode, toggleColorMode } = useContext(ModeContext);
  const [showCustomTheme, setShowCustomTheme] = useState(true);

  return (
    <>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box
        id="hero"
        sx={{
          width: "100%",
          backgroundImage:
            mode === "light"
              ? "linear-gradient(180deg, #CEE5FD, #FFF)"
              : "linear-gradient(#02294F, #090E10)",
          backgroundSize: "100% 80%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        ></Container>
      </Box>
      <Divider />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
      {/* <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={() => setShowCustomTheme(!showCustomTheme)}
      /> */}
    </>
  );
}
