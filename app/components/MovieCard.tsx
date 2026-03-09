'use client';

import { useState } from 'react';
import Image  from 'next/image';
import {MovieSearchItem} from '../lib/api'
interface movieItem {title:string,
                     year:string,
                     type:string,
                     poster: string,
}
export default function MovieCard({title, year, type, poster}:movieItem) {
    return (
        <div >
            <Image src={poster} alt={title} width={500} height={500}/>
            <h2>{title}</h2>
            <h2>{year}</h2>
            <h2>{type}</h2>
                
        </div>
        

)}




