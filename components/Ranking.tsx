"use client"
import React, { Component } from "react";
import { Container } from "@mui/material";
import getLPTheme from "./getLPTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ModeContext } from "../app/context/ModeProvider";
import { ptBR as corePtBR } from '@mui/material/locale';
import { ptBR } from '@mui/x-data-grid/locales';
import DataGridFetch from "./DataGridFetch";


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

const handleRefresh = async () => {
    // Simula um tempo de carregamento
    console.log('Dados atualizados!');
  };

  
  class RankingUser extends Component<AntDesignGridProps> {
      static contextType = ModeContext;
      context!: React.ContextType<typeof ModeContext>;
      
      render() {
          const { rows, columns } = this.props;
          const fetchRows = async () => {
        return rows
          }
        const { mode } = this.context;
        const LPtheme = createTheme(getLPTheme(mode),
            ptBR,
            corePtBR
        );
        return (
            <ThemeProvider theme={LPtheme}>
                <Container
                    id="Ranking"
                    sx={(theme) => ({
                        pt: { xs: 4, sm: 12 },
                        pb: { xs: 8, sm: 10 },
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 6 },
                        backgroundColor: theme.palette.mode === 'light' ? '#fafbfe' : '#090e10',
                        borderRadius: '13px',
                        border: '2px solid',
                        borderColor: theme.palette.mode === 'light' ? '#d7eafd' : '#090e10'
                    })}
                >
                    <DataGridFetch
                        title='Ranking de Unidade'
                        columns={columns}
                        rows={() => fetchRows()}
                       // heightBox={250}
                        widthBox={'100%'}
                        enableFilter={true} // Habilitar campo de pesquisa
                        enableSelection={true} // Habilitar seleção de linhas
                        enableRefreshButton={true} // Habilitar botão de atualização
                        onRefresh={handleRefresh} // Função executada ao clicar no botão de atualização
                        filterableColumns={['unitName', 'name']}
                    />
                </Container>
            </ThemeProvider>
        );
    }
}

export default RankingUser;
