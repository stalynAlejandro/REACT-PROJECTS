import { Box } from '@mui/material'
import Header from 'components/header'
import BarChart from 'components/barchart'

const Bar = (): JSX.Element => {
	return (
		<Box m="20px">
			<Header title="Bar Chart" subtitle="Simple Bar Chart" />
			<Box height="75vh">
				<BarChart isDashboard={false} />
			</Box>
		</Box>
	)
}

export default Bar
