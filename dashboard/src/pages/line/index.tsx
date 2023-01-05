import { Box } from '@mui/material'
import Header from 'components/header'
import LineChart from 'components/linechart'

const Line = (): JSX.Element => {
	return (
		<Box m="20px">
			<Header title="Line Chart" subtitle="Simple Line Chart" />
			<Box height="75vh">
				<LineChart isDashboard={false} />
			</Box>
		</Box>
	)
}

export default Line
