import { Box, useTheme } from '@mui/material'
import { tokens } from 'theme'
import { IColors } from 'interfaces/colors.interfaces'

interface ProgressCircleInterface {
	progress?: number
	size?: string
}

const ProgressCircle = ({ progress = 0.75, size = '40' }: ProgressCircleInterface): JSX.Element => {
	const theme = useTheme()
	const colors: IColors = tokens(theme.palette.mode)
	const angle: number = progress * 360
	return (
		<Box
			sx={{
				background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
				borderRadius: '50%',
				width: `${size}px`,
				height: `${size}px`,
			}}
		/>
	)
}

export default ProgressCircle
