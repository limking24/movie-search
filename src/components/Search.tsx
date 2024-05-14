import { Container, Space } from '@mantine/core';
import { useState } from 'react';
import { MovieApi, SearchResponse } from '../apis/movie-api';
import { FilterOption } from '../models/filter-option';
import classes from './Search.module.css';
import SearchFilter from './SearchFilter';
import SearchResults from './SearchResults';

interface Props {
	movieApi: MovieApi
}

export default function Search({ movieApi }: Props) {
	const [page, setPage] = useState(1);
	const [response, setResponse] = useState<SearchResponse | null>(null);

	async function search(option: FilterOption) {
		try {
			let response = option.title ? await movieApi.search(option) : null;
			setResponse(response);
		} catch (e) {
			setResponse({
				code: 'error',
				movies: [],
				total: 0
			})
		}
	}

	return <Container>
				<Space h="md"/>
				<div className={response == null ? classes.center : ''}>
					<SearchFilter onChange={search} />
				</div>
				<Space h="md"/>
				{ response != null && <SearchResults response={response} /> }
			</Container>;
}