'use client'
import {useState} from 'react';
interface PaginationProps {
    page: number,
    totalResults: number,
    onUpdatePage: (pageNumber:number) => void
}

export default function Pagination({page, totalResults, onUpdatePage}: PaginationProps) {
    const totalPages = Math.ceil(totalResults/10)


    return (
        <div>
            <button disabled={page<=1} onClick={()=> onUpdatePage(page-1)}>previous</button>
            <p>page {page} out of {totalPages}</p>
            <button disabled={page>=totalPages} onClick={() => onUpdatePage(page+1)}>next</button>
        </div>
    )
}