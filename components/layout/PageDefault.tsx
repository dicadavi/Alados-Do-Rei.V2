"use client";
import { CardContent, useTheme } from "@mui/material";
import React from "react";

export default function PageDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme(); // Usando o tema do contexto global

  return (
    <CardContent
      sx={{
        backgroundColor: theme.palette.mode === "light" ? "#fbfcfe" : "#0f1619",
      }}
    >
      {children}
    </CardContent>
  );
}
