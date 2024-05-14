import { FilterOption } from '../models/filter-option';
import { MovieApi, SearchResponse } from './movie-api';

export class OmdbApi implements MovieApi {

	public constructor(private apiKey: string,
						private imdbId?: string,
						private baseUrl = 'http://www.omdbapi.com/') {}

	public search = async (option: FilterOption) => {
		return {
			code: 'success',
			movies: [{
				"title": "Rush",
				"year": 2013,
				"id": "tt1979320",
				"poster": "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
			  },
			  {
				"title": "Rush Hour",
				"year": 1998,
				"id": "tt0120812",
				"poster": "https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
			  },
			  {
				"title": "Rush Hour 2",
				"year": 2001,
				"id": "tt0266915",
				"poster": "https://m.media-amazon.com/images/M/MV5BODhlNGJjMWQtZGMyYS00MzJhLWJhZGMtY2NlNDI5Nzg5NTU2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
			  },
			  {
				"title": "Rush Hour 3",
				"year": 2007,
				"id": "tt0293564",
				"poster": "https://m.media-amazon.com/images/M/MV5BMTA0Nzg5NjQ0MDBeQTJeQWpwZ15BbWU3MDE4Mzg5NDE@._V1_SX300.jpg"
			  },
			  {
				"title": "The Gold Rush",
				"year": 1925,
				"id": "tt0015864",
				"poster": "https://m.media-amazon.com/images/M/MV5BMDA3NmE2OTYtZWQ1Zi00OGI2LTk5NjctNThhNGJjYTI1NzRlXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg"
			  },
			  {
				"title": "Premium Rush",
				"year": 2012,
				"id": "tt1547234",
				"poster": "https://m.media-amazon.com/images/M/MV5BNzkxNjAwMDkwOF5BMl5BanBnXkFtZTcwMTQ1NDkwOA@@._V1_SX300.jpg"
			  },
			  {
				"title": "August Rush",
				"year": 2007,
				"id": "tt0426931",
				"poster": "https://m.media-amazon.com/images/M/MV5BNDIwNjE3NjU2NV5BMl5BanBnXkFtZTcwNTQ2NjQzMw@@._V1_SX300.jpg"
			  },
			  {
				"title": "Fools Rush In",
				"year": 1997,
				"id": "tt0119141",
				"poster": "https://m.media-amazon.com/images/M/MV5BZTlhMWE4MzMtNjExOS00MjQ2LWI2ZTItZmExMTJiYjFlMmYyXkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_SX300.jpg"
			  },
			  {
				"title": "Big Time Rush",
				"year": 2023,
				"id": "tt1131746",
				"poster": "https://m.media-amazon.com/images/M/MV5BMjIzNDE4MTM2Ml5BMl5BanBnXkFtZTcwNjYyNTA2Mw@@._V1_SX300.jpg"
			  },
			  {
				"title": "Rush",
				"year": 1991,
				"id": "tt0102820",
				"poster": "https://m.media-amazon.com/images/M/MV5BNDI0NzEyZjItMzQzZS00YTI1LTkyOTAtZWIzZWUxZGU0NjMxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
			  }],
			  total: 408
		} satisfies SearchResponse;
	};

}