import { useState } from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from 'theme'
import SideBarList from 'pages/global/sidebar/sidebarlist'
import SideBarUser from 'pages/global/sidebar/sidebaruser'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { IColors } from 'interfaces/colors.interfaces'

const SideBar = (): JSX.Element => {
	const theme = useTheme()
	const colors: IColors = tokens(theme.palette.mode)
	const { collapseSidebar } = useProSidebar()

	const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
	const [selected, setSelected] = useState<string>('Dashboard')

	const onCollapsed = (): void => {
		collapseSidebar()
		setIsCollapsed(!isCollapsed)
	}

	return (
		<Box display="flex" height="100%">
			<Sidebar defaultCollapsed={true}>
				<Menu closeOnClick={false}>
					<MenuItem
						onClick={() => onCollapsed()}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: '10px 0 20px 0',
							color: colors.grey[100],
						}}
					>
						{!isCollapsed && (
							<Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
								<Typography variant="h3" color={colors.grey[100]}>
									PANEL
								</Typography>
								<IconButton>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>
					{!isCollapsed && <SideBarUser colors={colors} />}
					<SideBarList
						colors={colors}
						isCollapsed={isCollapsed}
						selected={selected}
						setSelected={setSelected}
					/>
				</Menu>
			</Sidebar>
		</Box>
	)
}

export default SideBar
