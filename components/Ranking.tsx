'use client'
import * as React from "react";
import DataGridDemo from "@/components/DataGrid";
import { Box, Grid } from "@mui/material";
import getLPTheme from './getLPTheme';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface Row {
    name: string;
    unitName?: string;
    points: number;
}

interface Column {
    field: string;
    headerName?: string;
    width?: number;
    editable?: boolean;
}



interface AntDesignGridProps {
    rows: Row[];
    columns: Column[];
}

const LPtheme = createTheme(getLPTheme('dark'));


export default function RankingUser({ rows, columns }: AntDesignGridProps) {


    return (
        <ThemeProvider theme={LPtheme}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid xs={6} md={8}>
                    <DataGridDemo rows={rows} columns={columns} />
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
