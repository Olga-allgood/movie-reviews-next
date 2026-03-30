'use client';

import { useState } from 'react';
import Image  from 'next/image';
import {MovieSearchItem} from '../lib/api'
interface movieItem {title:string,
                     year:string,
                     type:string,
                     poster: string,
                     getMovie: ()=> void
}
export default function MovieCard({title, year, type, poster, getMovie}:movieItem) {
    const hasPoster = poster && poster != "N/A"
    return (
        <div >
            {hasPoster?(<Image src={poster} alt={title} width={500} height={500}/>):(<p>no poster available</p>)}
            <h2>{title}</h2>
            <h2>{year}</h2>
            <h2>{type}</h2>
            <button onClick ={getMovie}>Get More Details</button>
                
        </div>
        

)}




