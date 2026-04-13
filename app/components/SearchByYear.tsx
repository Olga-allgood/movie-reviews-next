'use client'
interface YearFilterProps{year:string, handleMovieYear:(type:string)=>void}

export default function SearchByYear({year, handleMovieYear}:YearFilterProps){
    return (
        <select value={year} onChange={(e)=> handleMovieYear(e.target.value)}>
            <option value="">All years</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>

        </select>

    )
        
}
    