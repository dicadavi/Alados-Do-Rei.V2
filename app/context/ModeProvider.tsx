"use client";
import React, { createContext, useState, ReactNode } from "react";
import {
  PaletteMode,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import getTheme from "../theme/getTheme"; // Novo caminho do tema

interface ModeContextType {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

const ModeContext = createContext<ModeContextType>({
  mode: "dark",
  toggleColorMode: () => {},
});

interface ModeProviderProps {
  children: ReactNode;
}

const ModeProvider = ({ children }: ModeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const theme = createTheme(getTheme(mode));

  return (
    <ModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ModeContext.Provider>
  );
};

export { ModeProvider, ModeContext };
