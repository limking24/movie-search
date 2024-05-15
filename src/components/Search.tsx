import { Container, Space } from '@mantine/core';
import { useState } from 'react';
import { MovieApi } from '../apis/movie-api';
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
	const [toLoadMore, setToLoadMore] = useState(false);
	const [shown, setShown] = useState(0);
	const [option, setOption] = useState<FilterOption | null>(null);
	const [page, setPage] = useState(1);

	async function search(option: FilterOption) {
		try {
			if (option.title) {
				let response = await movieApi.search(option);
				let count = response.movies.length;
				setPage(1);
				setOption(option);
				setShown(count);
				setMovies(response.movies);
				setSearchResult(response.code);
				setToLoadMore(response.total > shown);
			} else {
				setMovies([]);
				setSearchResult('none');
				setToLoadMore(false);
			}
		} catch (e) {
			setMovies([]);
			setSearchResult('error');
			setToLoadMore(false);
		}
	}

	async function loadMore() {
		try {
			setToLoadMore(false);
			console.log({ page: page + 1, ...option! })
			let response = await movieApi.search({ page: page + 1, ...option! });
			let $shown = shown + response.movies.length;
			setPage(page + 1);
			setShown($shown);
			setMovies([...movies, ...response.movies]);
			setToLoadMore(response.total > $shown);
		} catch (e) {
			setToLoadMore(true);
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

				{ toLoadMore && <a style={{ cursor: 'pointer' }} onClick={loadMore}>Load More</a>}

				{ searchResult == 'error' && 
					<p style={{textAlign: 'center'}}> Oops,something went wrong :&#40;</p>}
			</Container>;
}