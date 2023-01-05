import { ColorModeContext, useMode } from 'theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Topbar from 'pages/global/topbar'
import SideBar from 'pages/global/sidebar'
import Dashboard from 'pages/dashboard'
import Team from 'pages/team'
import Invoices from 'pages/invoices'
import Contacts from 'pages/contacts'
import Bar from 'pages/bar'
import Form from 'pages/form'
import Line from 'pages/line'
import Pie from 'pages/pie'
import Faq from 'pages/faq'
import Geography from 'pages/geography'
import Calendar from 'pages/calendar'

function App(): JSX.Element {
	const [theme, colorMode] = useMode()

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<SideBar />
					<main className="content">
						<Topbar />
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/team" element={<Team />} />
							<Route path="/invoices" element={<Invoices />} />
							<Route path="/contacts" element={<Contacts />} />
							<Route path="/bar" element={<Bar />} />
							<Route path="/form" element={<Form />} />
							<Route path="/line" element={<Line />} />
							<Route path="/pie" element={<Pie />} />
							<Route path="/faq" element={<Faq />} />
							<Route path="/geography" element={<Geography />} />
							<Route path="/calendar" element={<Calendar />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App
