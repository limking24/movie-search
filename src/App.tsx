import { Container, Grid, GridCol, MantineProvider, Space } from "@mantine/core";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import MovieDetail from './components/MovieDetail';
import SearchFilter from './components/SearchFilter';
import { theme } from "./theme";

export default function App() {
	return <MantineProvider theme={theme} defaultColorScheme="dark">
				<SearchFilter/>
				<Space h="md"/>
				<Container bg="var(--mantine-color-dark-6)" pt="15px">
					<Grid>
						<GridCol span={{base: 4, sm: 3}}><MovieDetail id="1" title="Rush" year="1992" poster="https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" /></GridCol>
						<GridCol span={{base: 4, sm: 3}}><MovieDetail id="1" title="Rush" year="1992" poster="https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" /></GridCol>
						<GridCol span={{base: 4, sm: 3}}><MovieDetail id="1" title="Rush" year="1992" poster="https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" /></GridCol>
						<GridCol span={{base: 4, sm: 3}}><MovieDetail id="1" title="Rush" year="1992" poster="https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" /></GridCol>
						<GridCol span={{base: 4, sm: 3}}><MovieDetail id="1" title="Rush" year="1992" poster="https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" /></GridCol>
						<GridCol span={{base: 4, sm: 3}}><MovieDetail id="1" title="Rush" year="1992" poster="https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" /></GridCol>
					</Grid>
				</Container>
			</MantineProvider>;
}
