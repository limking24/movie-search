import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import { theme } from "./theme";
import { OmdbApi } from './apis/omdb-api';

export default function App() {
	const movieApi = new OmdbApi('a810ca9f', 'tt3896198');

	return <MantineProvider theme={theme} defaultColorScheme="dark">
				<HashRouter>
					<Routes>
						<Route path="*" element={<Search movieApi={movieApi}/>}/>
					</Routes>
				</HashRouter>
			</MantineProvider>;
}