import { Grid, GridCol } from '@mantine/core';
import MovieDetail from './MovieDetail';
import { Movie } from '../models/movie';

interface Props {
	movies: Movie[]
}

export default function SearchResults({movies}: Props) {
	return <Grid bg="var(--mantine-color-dark-6)" p="15px">
				{movies.length == 0 && 
					<p style={{textAlign: 'center'}}>No movies found.</p>}

				{movies.map((movie, i) =>
					<GridCol span={{base: 4, sm: 3}} key={i}>
						<MovieDetail
							id={movie.id}
							title={movie.title}
							year={movie.year}
							poster={movie.poster ?? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} />
					</GridCol>)}
			</Grid>;
}