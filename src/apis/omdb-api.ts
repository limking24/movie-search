import { FilterOption } from '../models/filter-option';
import { MovieApi, SearchResponse } from './movie-api';

interface OmdbResponse {
	Response: 'True' | 'False'
}

interface SucessfulReponse extends OmdbResponse {
	Response: 'True',
	totalResults: string,
	Search: {
		Title: string,
		Year: string,
		imdbId: string,
		Type: string,
		Poster: string
	}[]
}

interface BadResponse extends OmdbResponse {
	Response: 'False',
	Error: string
}

export class OmdbApi implements MovieApi {

	public constructor(private apiKey: string,
						private imdbId?: string,
						private baseUrl = 'http://www.omdbapi.com/') {}

	public search = async (option: FilterOption) => {
		let url = new URL(this.baseUrl);
		let params = url.searchParams;
		params.set('apiKey', this.apiKey);
		params.set('s', option.title);
		params.set('type', 'movie');
		if (this.imdbId) params.set('i', this.imdbId);
		if (option.year) params.set('y', String(option.year));
		if (option.page) params.set('page', String(option.page));

		let response = await fetch(url);
		let json: OmdbResponse = await response.json();
		if (json.Response == 'True') {
			let $json = json as SucessfulReponse;
			return {
				code: 'success',
				movies: $json.Search.map(m => ({
					id: m.imdbId,
					title: m.Title,
					year: Number(m.Year),
					poster: m.Poster == 'N/A' ? undefined : m.Poster
				})),
				total: Number($json.totalResults)
			} satisfies SearchResponse;
		} else {
			let error = (json as BadResponse).Error;
			console.warn(error);
			return {
				code: error == 'Movie not found!' ? 'success' : 'error',
				movies: [],
				total: 0
			} satisfies SearchResponse;
		}
	};

}