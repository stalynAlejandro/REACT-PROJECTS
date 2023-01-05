import { MenuItem } from 'react-pro-sidebar'
import { Typography, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { tokens } from 'theme'
import { IColors } from 'interfaces/colors.interfaces'

interface ItemInterface {
	title: string
	to: string
	icon: JSX.Element
	selected: string
	setSelected: (title: string) => void
}

const Item = ({ title, to, icon, selected, setSelected }: ItemInterface): JSX.Element => {
	const navigate = useNavigate()
	const theme = useTheme()
	const colors: IColors = tokens(theme.palette.mode)

	const onClickedMenu = (): void => {
		setSelected(title)
		navigate(to)
	}

	return (
		<MenuItem
			active={selected === title}
			style={{
				color: colors.grey[100],
			}}
			onClick={onClickedMenu}
			icon={icon}
		>
			<Typography>{title}</Typography>
		</MenuItem>
	)
}

export default Item
