"use client"
import React, { Component } from "react";
import DataGridDemo from "@/components/DataGrid";
import { Box, Card, Container, Grid } from "@mui/material";
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
                <Container
                    id="Ranking"
                    sx={{
                        pt: { xs: 4, sm: 12 },
                        pb: { xs: 8, sm: 16 },
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 6 },
                    }}
                >

                    <DataGridDemo rows={rows} columns={columns} />


                </Container>
            </ThemeProvider>
        );
    }
}

export default RankingUser;
