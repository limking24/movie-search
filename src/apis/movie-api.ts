import { Movie } from '../models/movie';

export interface SearchOption {
	title?: string,
	year?: number
}

export interface MovieApi {
	search: (option: SearchOption) => Promise<Movie[]>;
}