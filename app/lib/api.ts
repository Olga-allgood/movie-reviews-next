import MovieChoice from "../components/FilterType";

const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY ='525f60ab';


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
  Genre: string; 
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
  page = 1,
  type: string = "", 
  year: string = ""
): Promise<MovieSearchResponse> {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(title)}&page=${page}&type=${type}&y=${year}`
  );

  return res.json()
}

export async function getMovieDetails(
   imdbID: string,
): Promise<MovieDetails> {
  const res = await fetch(
  `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  );  

  return res.json()
  
}