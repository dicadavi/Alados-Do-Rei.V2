'use client'
import { CardContent, useTheme } from "@mui/material";
import getLPTheme from "./getLPTheme";
import { createTheme } from "@mui/material/styles";
import { ModeContext } from "../app/context/ModeProvider";
import React from "react";
import { ptBR as corePtBR } from '@mui/material/locale';
import { ptBR } from '@mui/x-data-grid/locales';

export default function PageDefault({ children,
}: {
    children: React.ReactNode;
}) {
    const { mode } = React.useContext(ModeContext);

    const LPtheme = createTheme(getLPTheme(mode), ptBR, corePtBR);
    return (

        <CardContent
            sx={() => ({
                backgroundColor: LPtheme.palette.mode === 'light' ? '#fbfcfe' : '#0f1619',
            })}
        >
            {children}
        </CardContent>
    );
}
