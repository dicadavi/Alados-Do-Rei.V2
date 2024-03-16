"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

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
  title: string,
  rows: Row[];
  columns: Column[];
}

export default function DataGridDemo({ title, rows, columns }: AntDesignGridProps) {


  return (
    <Box sx={{ width: '100%', alignItems: 'center' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
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