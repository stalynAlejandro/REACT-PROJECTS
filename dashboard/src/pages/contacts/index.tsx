import { Box, useTheme } from '@mui/material'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { tokens } from 'theme'
import { mockDataContacts } from 'data/mockData'
import Header from 'components/header'
import { generateContactsColumns } from 'utils/team.functions'
import { IColors } from 'interfaces/colors.interfaces'

const Contacts = (): JSX.Element => {
	const theme = useTheme()
	const colors: IColors = tokens(theme.palette.mode)
	const columns: GridColDef[] = generateContactsColumns()

	return (
		<Box m="20px">
			<Header title="CONTACTS" subtitle="List of contacts for future Reference" />
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
					'& .MuiDataGrid-root .MuiDataGrid-cell:focus': {
						outline: 'none !important',
					},
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: `${colors.grey[100]} !important`,
					},
				}}
			>
				<DataGrid
					checkboxSelection
					rows={mockDataContacts}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	)
}

export default Contacts
