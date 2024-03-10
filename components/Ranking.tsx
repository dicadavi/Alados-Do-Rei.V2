"use client"
import React, { Component } from "react";
import DataGridDemo from "@/components/DataGrid";
import { Box, Grid } from "@mui/material";
import getLPTheme from "./getLPTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ModeContext } from "../app/context/ModeProvider";

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

class RankingUser extends Component<AntDesignGridProps> {
    static contextType = ModeContext;
    context!: React.ContextType<typeof ModeContext>;

    render() {
        const { rows, columns } = this.props;
        const { mode } = this.context;
        const LPtheme = createTheme(getLPTheme(mode));
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
}

export default RankingUser;
