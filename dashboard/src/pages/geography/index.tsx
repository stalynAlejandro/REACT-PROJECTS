import { Box, useTheme } from '@mui/material'
import GeographyChart from 'components/geographychart'
import Header from 'components/header'
import { tokens } from 'theme'

const Geography = (): JSX.Element => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Box m="20px">
			<Header title="Geography" subtitle="Simple Geography Chart" />

			<Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
				<GeographyChart isDashboard={false} />
			</Box>
		</Box>
	)
}

export default Geography
