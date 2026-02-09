const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = process.env.API_KEY!;


export interface MovieSearchItem {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

export interface MovieSearchResponse {
  Search: MovieSearchItem[];
  totalResults: string;
  Response: 'True' | 'False';
  Error?: string;
}

export interface MovieDetails {
  imdbID: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string; // "Action, Drama"
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  imdbRating: string;
  Type: string;
}

export async function searchMoviesByTitle(
  title: string,
  page = 1
): Promise<MovieSearchItem[]> {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(title)}&page=${page}`
  );

  const data: MovieSearchResponse = await res.json();

  if (data.Response === 'False') {
    throw new Error(data.Error || 'No movies found');
  }

  return data.Search;
}