import * as React from "react";
import { Box, Container, Stack, ThemeProvider, Typography } from "@mui/material";

export default function Home() {
    return (
        <Box>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 20 },
                pb: { xs: 8, sm: 12 },
            }}>
                <Stack
                    spacing={2}
                    useFlexGap
                    sx={{ width: { xs: "100%", sm: "70%" } }}
                >
                    <Typography
                        component="h1"
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                        }}
                    >
                        Alados do&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                color: 'primary.light',
                            }}
                        >
                            Rei
                        </Typography>
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );

}
