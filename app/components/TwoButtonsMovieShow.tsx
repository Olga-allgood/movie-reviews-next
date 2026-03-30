'use client'


interface movieChoice{movieChoice:string, handleMovieChoice:(type:string)=>void}

export default function MovieChoice({movieChoice, handleMovieChoice}:movieChoice){
    
    
    return (
    <div>
    <button className={`${movieChoice=="movie"?"bg-blue text-white":"bg-grey text-black"}`} onClick={()=> handleMovieChoice("movie")}>Movie</button>
    <button className={`${movieChoice=="series"?"bg-blue text-white":"bg-grey text-black" }`}onClick={()=> handleMovieChoice("series")}>Series</button>
    </div>
)}