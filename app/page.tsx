'use client'
import { useState, useEffect } from 'react';
import MovieForm from './components/MovieForm';

import { searchMoviesByTitle, MovieSearchResponse, MovieDetails, MovieSearchItem } from './lib/api';


export default function HomePage() {
    const [title, setTitle] = useState<string>('');
    function handleSearch(movie:string){
        setTitle(movie)    

    }

    useEffect(()=> { 
        if (!title)
            return
        
        async function fetchMovie(){
            const data = await searchMoviesByTitle(title)
            if (data) {console.log(data[0]["Title"])}
        }
        fetchMovie()
        

},[title])

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        Movie Search
      </h1>

      <MovieForm onSearch={handleSearch}/>

    </main>
  );
}