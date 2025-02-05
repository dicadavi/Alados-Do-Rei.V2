"use client";
import * as React from "react";
import PageDefault from "@/components/layout/PageDefault";
import { useSession } from "next-auth/react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Checkbox, Button, CircularProgress, Box } from "@mui/material";

interface UserChecklist {
  id: number;
  name: string;
  uniforme: boolean;
  biblia: boolean;
  presenca: boolean;
  pontualidade: boolean;
  material: boolean;
}

export default function Ranking() {
  const { data: session, status } = useSession();
  const [userList, setUserList] = React.useState<UserChecklist[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchUserData = async () => {
      if (status === "authenticated" && session?.user?.name) {
        try {
          const response = await fetch("/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName: session.user.name }),
          });

          if (!response.ok) throw new Error("Erro ao buscar dados");

          const data = await response.json();
          const initialChecklist = data.userNames.map(
            (name: string, index: number) => ({
              id: index + 1,
              name,
              uniforme: false,
              biblia: false,
              presenca: false,
              pontualidade: false,
              material: false,
            })
          );
          setUserList(initialChecklist);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      }
    };

    fetchUserData();
  }, [session, status]);

  const handleCheckboxChange = (id: number, field: keyof UserChecklist) => {
    const updatedList = userList.map((user) =>
      user.id === id ? { ...user, [field]: !user[field] } : user
    );
    setUserList(updatedList);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checklist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ checklist: userList }),
      });

      if (!response.ok) throw new Error("Erro ao salvar dados");
      alert("Informações salvas com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar informações:", error);
      alert("Erro ao salvar informações.");
    } finally {
      setLoading(false);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Nome", minWidth: 150, flex: 1 },
    {
      field: "uniforme",
      headerName: "Uniforme",
      minWidth: 130,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          checked={params.row.uniforme}
          onChange={() => handleCheckboxChange(params.row.id, "uniforme")}
        />
      ),
    },
    {
      field: "biblia",
      headerName: "Bíblia",
      minWidth: 130,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          checked={params.row.biblia}
          onChange={() => handleCheckboxChange(params.row.id, "biblia")}
        />
      ),
    },
    {
      field: "presenca",
      headerName: "Presença",
      minWidth: 130,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          checked={params.row.presenca}
          onChange={() => handleCheckboxChange(params.row.id, "presenca")}
        />
      ),
    },
    {
      field: "pontualidade",
      headerName: "Pontualidade",
      minWidth: 150,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          checked={params.row.pontualidade}
          onChange={() => handleCheckboxChange(params.row.id, "pontualidade")}
        />
      ),
    },
    {
      field: "material",
      headerName: "Material",
      minWidth: 130,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Checkbox
          checked={params.row.material}
          onChange={() => handleCheckboxChange(params.row.id, "material")}
        />
      ),
    },
  ];

  return (
    <PageDefault>
      <h1 className="text-xl font-bold mb-4">Checklist da Unidade</h1>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={userList}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#333",
              color: "#fff",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-cell": {
              color: "#fff",
            },
            backgroundColor: "#424242",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Salvar"}
        </Button>
      </Box>
    </PageDefault>
  );
}
