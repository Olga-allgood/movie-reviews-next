'use client'
import { useState, useEffect } from 'react';
import MovieForm from './components/MovieForm';
import MovieCard from './components/MovieCard';

import { searchMoviesByTitle, MovieSearchResponse, MovieDetails, MovieSearchItem } from './lib/api';


export default function HomePage() {
    const [movies, setMovies] = useState<MovieSearchItem[]>([]);
    const [title, setTitle] = useState<string>('Titanic');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);

    function handleSearch(movie:string){
        setTitle(movie)    

    }

    useEffect(()=> { 
        if (!title)
            return
        
        async function fetchMovie(){
            setLoading(true)
            const data = await searchMoviesByTitle(title, page)
            if (data) {
                const uniqueMovies = data.Search.filter((movie, index, movies)=> movies.findIndex((m)=> m.imdbID==movie.imdbID)==index )
                setMovies(uniqueMovies)
                setTotalResults(Number(data.totalResults)|| 0)
               
            }
            else {
                setMovies([])
                setTotalResults(0)
                setError( "movie not found" )
            }
            setLoading(false)
             
        }
        fetchMovie()

        

},[title, page])
console.log(movies)
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        Movie Search
      </h1>

      <MovieForm onSearch={handleSearch}/>
      <div> {movies.map((item)=> ( <MovieCard key={item.imdbID} title={item.Title} year={item.Year} poster ={item.Poster} type={item.Type}/>) )}</div>
    

    </main>
  );
}