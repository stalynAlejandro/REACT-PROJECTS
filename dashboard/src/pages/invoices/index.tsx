import { Box, useTheme } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { tokens } from 'theme'
import { mockDataInvoices } from 'data/mockData'
import Header from 'components/header'
import { generateInvoiceColumns } from 'utils/team.functions'
import { IColors } from 'interfaces/colors.interfaces'

const Invoices = (): JSX.Element => {
	const theme = useTheme()
	const colors: IColors = tokens(theme.palette.mode)
	const columns: GridColDef[] = generateInvoiceColumns(colors)

	return (
		<Box m="20px">
			<Header title="INVOICES" subtitle="List of Invoice Balances" />
			<Box
				m="40px 0 0 0"
				height="75vh"
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none',
					},
					'& .name-column--cell': {
						color: colors.greenAccent[300],
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none',
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						backgroundColor: colors.blueAccent[700],
					},
					'& .MuiCheckbox-root': {
						color: `${colors.greenAccent[200]} !important`,
					},
				}}
			>
				<DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
			</Box>
		</Box>
	)
}

export default Invoices
