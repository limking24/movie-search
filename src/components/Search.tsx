import { Container, Space } from '@mantine/core';
import { useState } from 'react';
import { MovieApi, SearchResponse } from '../apis/movie-api';
import { FilterOption } from '../models/filter-option';
import classes from './Search.module.css';
import SearchFilter from './SearchFilter';
import SearchResults from './SearchResults';
import { Movie } from '../models/movie';

type Result = 'none' | 'success' | 'error';

interface Props {
	movieApi: MovieApi
}

export default function Search({ movieApi }: Props) {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [searchResult, setSearchResult] = useState<Result>('none');

	async function search(option: FilterOption) {
		try {
			let response = option.title ? await movieApi.search(option) : null;
			setMovies(response?.movies ?? []);
			setSearchResult(response?.code ?? 'none')
		} catch (e) {
			setMovies([]);
			setSearchResult('error');
		}
	}

	return <Container>
				<Space h="md"/>
				<div className={searchResult == 'none' ? classes.center : ''}>
					<SearchFilter onChange={search} />
				</div>
				<Space h="md"/>

				{ searchResult == 'success' && 
					<SearchResults movies={movies} /> }

				{ searchResult == 'error' && 
					<p style={{textAlign: 'center'}}> Oops,something went wrong :&#40;</p>}
			</Container>;
}