"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [  
  {
    field: 'name',
    headerName: 'Nome',
    width: 150,
    editable: false,
  },
  {
    field: 'unitName',
    headerName: 'Unidade',
    width: 150,
    editable: false,
  },
  {
    field: 'points',
    headerName: 'Pontuação',
    type: 'number',
    width: 110,
    editable: false,
  },
];



export default function DataGridDemo({ rows }: { rows: any[] }) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        getRowId={(row) => row.name}
        columns={columns}
        initialState={{           
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
          sorting: {
            sortModel: [{ field: 'points', sort: 'desc' }],
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}