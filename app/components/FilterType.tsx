'use client'


interface movieChoice{value:string, handleMovieChoice:(type:string)=>void}

export default function FilterType({value, handleMovieChoice}:movieChoice){
    
    
    return (
    <div>
        <select value={value} onChange={(e)=> handleMovieChoice(e.target.value)}>
            <option value="">All types</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
        </select>

    {/* <button className={`${movieChoice=="movie"?"bg-blue text-white":"bg-grey text-black"}`} onClick={()=> handleMovieChoice("movie")}>Movie</button>
    <button className={`${movieChoice=="series"?"bg-blue text-white":"bg-grey text-black" }`}onClick={()=> handleMovieChoice("series")}>Series</button> */}
    </div>
)}