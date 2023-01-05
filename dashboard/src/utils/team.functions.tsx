import { Box, Typography } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import { ROLE } from 'constants/roles.contants'
import { IColors } from 'interfaces/colors.interfaces'

export const generateTeamColumns = (colors: IColors): GridColDef[] => {
	return [
		{ field: 'id', headerName: 'ID' },
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			headerAlign: 'left',
			align: 'left',
		},
		{
			field: 'phone',
			headerName: 'Phone Number',
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 1,
		},
		{
			field: 'accessLevel',
			headerName: 'Access Level',
			flex: 1,
			renderCell: ({ row }: any) => {
				const { access } = row
				const backgournColor =
					access === ROLE.ADMIN
						? colors.greenAccent[600]
						: access === ROLE.MANAGER
						? colors.greenAccent[700]
						: colors.greenAccent[700]

				return (
					<Box
						width="60%"
						m="0 auto"
						p="5px"
						display="flex"
						justifyContent="center"
						borderRadius="4px"
						sx={{ backgroundColor: backgournColor }}
					>
						{access === ROLE.ADMIN && <AdminPanelSettingsOutlinedIcon />}
						{access === ROLE.MANAGER && <SecurityOutlinedIcon />}
						{access === ROLE.USER && <LockOpenOutlinedIcon />}
						<Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
							{access}
						</Typography>
					</Box>
				)
			},
		},
	]
}

export const generateContactsColumns = (): GridColDef[] => {
	return [
		{ field: 'id', headerName: 'ID', flex: 0.5 },
		{ field: 'registrarId', headerName: 'Registrar Id' },
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			headerAlign: 'left',
			align: 'left',
		},
		{
			field: 'phone',
			headerName: 'Phone Number',
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 1,
		},
		{
			field: 'address',
			headerName: 'Address',
			flex: 1,
		},
		{
			field: 'city',
			headerName: 'City',
			flex: 1,
		},
		{
			field: 'zipCode',
			headerName: 'ZipCode',
			flex: 1,
		},
	]
}

export const generateInvoiceColumns = (colors: IColors): GridColDef[] => {
	return [
		{ field: 'id', headerName: 'ID' },
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'phone',
			headerName: 'Phone Number',
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 1,
		},
		{
			field: 'cost',
			headerName: 'Cost',
			flex: 1,
			renderCell: (params) => (
				<Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>
			),
		},
		{
			field: 'date',
			headerName: 'Date',
			flex: 1,
		},
	]
}
