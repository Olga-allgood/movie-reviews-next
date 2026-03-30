'use client'
import { useState, useEffect } from 'react';
import MovieForm from './components/MovieForm';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import TwoButtonsMovieShow from './components/TwoButtonsMovieShow'


import { searchMoviesByTitle, MovieSearchResponse, MovieDetails, MovieSearchItem, getMovieDetails } from './lib/api';
import Pagination from './components/Pagination';


export default function HomePage() {
    const [movies, setMovies] = useState<MovieSearchItem[]>([]);
    const [title, setTitle] = useState<string>('Titanic');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [movie, setMovie] = useState<MovieDetails | null>(null)
    const [openModal, setModalOpen] = useState(false)
    const [movieChoice, setMovieChoice] = useState('')
   


    function handleSearch(movie:string){
        setTitle(movie)    

    }

    useEffect(()=> { 
        if (!title)
            return
        
        async function fetchMovie(){
            setLoading(true)
            const data = await searchMoviesByTitle(title, page, movieChoice)
            if (data.Response == "True" && data.Search) {
                const uniqueMovies = data.Search.filter((movie, index, movies)=> movies.findIndex((m)=> m.imdbID==movie.imdbID)==index )
                setMovies(uniqueMovies)
                setTotalResults(Number(data.totalResults)|| 0)
                setError("")
               
            }
            else {
                setMovies([])
                setTotalResults(0)
                setError(data.Error || "movie not found")
            }
            setLoading(false)
             
        }
        fetchMovie()

        

},[title, page, movieChoice])
console.log(openModal)

function updatePage(pageNumber:number){
    setPage(pageNumber)
}
async function getMovie(imdbID:string){
    const data = await getMovieDetails(imdbID)
    if (data){
        setMovie(data)
        setModalOpen(true)
    }
    else {
        setMovie(null)
        setModalOpen(false)
    }
      
}
function closeModal(){
    setModalOpen(false)
}
console.log(movie)
// getMovie("tt13186482")

function handleMovieChoice(type:string) {
    setMovieChoice(type)
    setPage(1)
}

  return (
    <>
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        Movie Search
      </h1>

      <MovieForm onSearch={handleSearch}/>
      <TwoButtonsMovieShow movieChoice={movieChoice} handleMovieChoice={handleMovieChoice}/>
      {loading && <p>Movies loading</p>}
      {error && !loading && <p>{error}</p>}
      {!error && !loading && movies.length>0 && 
      <div> {movies.map((item)=> ( <MovieCard key={item.imdbID} title={item.Title} year={item.Year} poster ={item.Poster} type={item.Type} getMovie ={()=>getMovie(item.imdbID)}/>) )}</div>}
      {openModal && <MovieModal movie={movie} closeModal={closeModal}/>}

    </main>
    
    <footer>
       <Pagination onUpdatePage={updatePage} page={page} totalResults={totalResults}/>
    </footer>
    </>
  );
}