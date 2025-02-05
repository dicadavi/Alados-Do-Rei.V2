"use client";
import React from "react";
import { Container, useTheme } from "@mui/material";
import { ModeContext } from "../../app/context/ModeProvider";
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
  console.log("Dados atualizados!");
};

const RankingUser: React.FC<AntDesignGridProps> = ({ rows, columns }) => {
  const theme = useTheme(); // Agora podemos usar o hook normalmente
  const { mode } = React.useContext(ModeContext);

  return (
    <Container
      id="Ranking"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 10 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        backgroundColor: theme.palette.mode === "light" ? "#fafbfe" : "#090e10",
        borderRadius: "13px",
        border: "2px solid",
        borderColor: theme.palette.mode === "light" ? "#d7eafd" : "#090e10",
      }}
    >
      <DataGridFetch
        title="Ranking de Unidade"
        columns={columns}
        rows={() => Promise.resolve(rows)}
        widthBox={"100%"}
        enableFilter={true}
        enableSelection={true}
        enableRefreshButton={true}
        onRefresh={handleRefresh}
        filterableColumns={["unitName", "name"]}
      />
    </Container>
  );
};

export default RankingUser;
