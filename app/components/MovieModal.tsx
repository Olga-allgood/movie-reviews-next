'use client'
import { MovieDetails } from "../lib/api";
import Image from "next/image";

interface movieDetails {
  movie: MovieDetails | null,
  closeModal: () => void
}

export default function MovieModal({ movie, closeModal }: movieDetails) {
  if (!movie) return null; // safety check

  return (
    // Overlay & container
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">
      
      {/* Modal content */}
      <div className="relative bg-gray-800 text-white rounded-2xl max-w-2xl max-h-[80vh] overflow-y-auto border border-white shadow-2xl p-6">
        
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 h-8 w-8 flex items-center justify-center text-black bg-white rounded-full hover:bg-gray-300"
          onClick={closeModal}
        >
          X
        </button>

        {/* Poster */}
        {movie.Poster && movie.Poster !== "N/A" ? (
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={500}
            height={500}
            className="mx-auto rounded-lg"
          />
        ) : (
          <p className="text-center">No poster available</p>
        )}

        {/* Movie info */}
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold">{movie.Title}</h1>
          <h2 className="text-lg italic mt-1">{movie.Genre}</h2>
          <p className="mt-2">{movie.Plot}</p>
        </div>

      </div>
    </div>
  );
}