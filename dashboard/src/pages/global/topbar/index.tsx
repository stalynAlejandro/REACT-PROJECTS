import { useContext } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from 'theme'
import InputBase from '@mui/material/InputBase'
import LighModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlined from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { IColors } from 'interfaces/colors.interfaces'

const Topbar = (): JSX.Element => {
	const theme = useTheme()
	const colors: IColors = tokens(theme.palette.mode)
	const colorMode = useContext(ColorModeContext)

	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			<Box display={'flex'} borderRadius="3px" sx={{ backgroundColor: colors.primary[400] }}>
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
				<IconButton type="button" sx={{ p: 1 }}>
					<SearchIcon />
				</IconButton>
			</Box>

			<Box display={'flex'}>
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LighModeOutlinedIcon />}
				</IconButton>
				<IconButton>
					<NotificationsOutlinedIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlined />
				</IconButton>
				<IconButton>
					<PersonOutlinedIcon />
				</IconButton>
			</Box>
		</Box>
	)
}

export default Topbar
