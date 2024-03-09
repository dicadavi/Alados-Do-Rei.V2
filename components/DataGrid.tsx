"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

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

export default function DataGridDemo({ rows, columns }: AntDesignGridProps) {


  return (
    <Box sx={{ height: 400, width: '50%', alignItems: 'center' }}>
      <DataGrid
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : 'linear-gradient(#02294F, #090E10)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        })}
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