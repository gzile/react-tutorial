import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'name',
    headerName: 'Country name',
    width: 200,
    description: 'Country name description',
    sortable: true,
  },
  {
    field: 'capital',
    headerName: 'Capital city',
    width: 200,
    sortable: true,
  },
  {
    field: 'population',
    headerName: 'Population',
    type: 'number',
    width: 150,
    sortable: true,
  },
  {
    field: 'flag',
    headerName: 'Flag',
    width: 160,
    renderCell: (params) => <img src={params.row.flag} alt={params.row.flag} width={50} />
  },
];

export default function DataGridDemo({countries}) {

  return (
    <Box sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={countries}
        columns={columns}
        getRowId={(row)=> row.name}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
    </Box>
  );
}
