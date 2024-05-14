import { FilterOption } from '../models/filter-option';
import { Movie } from '../models/movie';

export interface SearchResponse {
	code: 'success' | 'error',
	movies: Movie[],
	total: number
}

export interface MovieApi {
	search: (option: FilterOption) => Promise<SearchResponse>;
}