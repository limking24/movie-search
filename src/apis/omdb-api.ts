import { MovieApi, SearchOption } from './movie-api';

export class OmdbApi implements MovieApi {

	public constructor(private apiKey: string,
						private imdbId?: string,
						private baseUrl = 'http://www.omdbapi.com/') {}

	public search = async (option: SearchOption) => {
		return [{
			id: 'test',
			poster: "string",
			title: "string",
			year: "string"
		}];
	};

}