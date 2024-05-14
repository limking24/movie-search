import { Grid, GridCol } from '@mantine/core';
import MovieDetail from './MovieDetail';
import { Movie } from '../models/movie';
import { SearchResponse } from '../apis/movie-api';

interface Props {
	response: SearchResponse
}

export default function SearchResults({response}: Props) {
	return <Grid bg="var(--mantine-color-dark-6)" p="15px">
				{response.movies.map((movie, i) =>
					<GridCol span={{base: 4, sm: 3}} key={i}>
						<MovieDetail
							id={movie.id}
							title={movie.title}
							year={movie.year}
							poster={movie.poster} />
					</GridCol>)}
			</Grid>;
}