import { Box, Typography } from '@mui/material'
import UserLogo from 'assets/user.jpg'
import { IColors } from 'interfaces/colors.interfaces'

interface SideBarUserInterface {
	colors: IColors
}

const SideBarUser = ({ colors }: SideBarUserInterface): JSX.Element => {
	return (
		<Box mb="25px">
			<Box display="flex" justifyContent="center" alignItems="center">
				<img
					alt="profile-user"
					width="100px"
					height="100px"
					src={UserLogo}
					style={{ cursor: 'pointer', borderRadius: '50%' }}
				/>
			</Box>
			<Box textAlign="center">
				<Typography
					variant="h2"
					color={colors.grey[100]}
					fontWeight="bold"
					sx={{ m: '10px 0 0 0' }}
				>
					Xu
				</Typography>
				<Typography variant="h5" color={colors.greenAccent[500]}>
					Admin
				</Typography>
			</Box>
		</Box>
	)
}

export default SideBarUser
