import React, { useState, useEffect, useRef } from 'react';
import {
    DataGrid,
    GridColDef,
    GridToolbarContainer,
    GridToolbarExport,
} from '@mui/x-data-grid';
import {
    Box,
    Button,
    CircularProgress,
    TextField,
} from '@mui/material';
import { ptBR } from '@mui/x-data-grid/locales';
import DashboardCard from './DashboardCard';

interface DataGridFetchProps {
    title?: string,
    columns: GridColDef[];
    rows: (parmRows?: any) => Promise<any[]>;
    heightBox?:number | string | Record<string, any>;
    widthBox?: number | string | Record<string, any>;
    pageSizeOptionsProp?: readonly (number | { value: number; label: string })[]
    loading?: boolean;
    enableFilter?: boolean;
    enableSelection?: boolean;
    enableRefreshButton?: boolean;
    onRefresh?: () => Promise<void>;
    filterableColumns?: string[];
}

const DataGridFetch: React.FC<DataGridFetchProps> = ({
    title,
    columns,
    rows,
    heightBox = 400,
    widthBox = { xs: '280px', sm: 'auto' },
    pageSizeOptionsProp = [5,10,25, { value: -1, label: 'Todos' },],
    loading = false,
    enableFilter = false,
    enableSelection = false,
    enableRefreshButton = false,
    onRefresh,
    filterableColumns = [],
}) => {
    const [rowData, setRowData] = useState<any[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [searchText, setSearchText] = useState('');
    const searchInputRef = useRef<HTMLInputElement>(null); // Usamos um ref para o campo de pesquisa

    useEffect(() => {
        const loadRows = async () => {
            const data = await rows();
            setRowData(data);
        };
        loadRows();
    }, [rows]);

    const handleRefresh = async () => {
        if (onRefresh) {
            setIsRefreshing(true);
            await onRefresh();
            const data = await rows();
            setRowData(data);
            setIsRefreshing(false);
        }
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value.toLowerCase());
    };

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchText]);

    const filteredRows = rowData.filter((row) =>
        filterableColumns.some((column) =>
            String(row[column]).toLowerCase().includes(searchText)
        )
    );

    const CustomToolbar = () => (
        <GridToolbarContainer>
            {enableRefreshButton && (
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    startIcon={isRefreshing && <CircularProgress size={20} />}
                >
                    {isRefreshing ? 'Atualizando...' : 'Atualizar'}
                </Button>
            )}
            {enableFilter && (
                <TextField
                    inputRef={searchInputRef} // Mantém o foco no campo de pesquisa
                    label="Pesquisar"
                    variant="outlined"
                    size="small"
                    value={searchText}
                    onChange={handleSearch}
                    sx={{ marginLeft: 2 }}
                />
            )}
            <Box sx={{ flexGrow: 1 }} />
            <GridToolbarExport />
        </GridToolbarContainer>
    );

    return (
        <DashboardCard title={title}>
            <Box sx={{ height: heightBox, overflow: 'auto', width: widthBox }}>
                <DataGrid
                    localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                    rows={filteredRows}
                    columns={columns}
                    initialState={{                        
                        pagination: { paginationModel: { pageSize: 5 } },
                      }}
                    pageSizeOptions={pageSizeOptionsProp}
                    checkboxSelection={enableSelection}
                    disableRowSelectionOnClick
                    loading={loading || isRefreshing}
                    disableColumnFilter
                    slots={{
                        toolbar: CustomToolbar,
                    }}
                />
            </Box>
        </DashboardCard>
    );
};

export default DataGridFetch;
