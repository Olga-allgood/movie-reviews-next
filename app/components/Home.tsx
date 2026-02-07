import { useState } from 'react';

export default function MovieSearch() {
  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState<any>(null);
  const [error, setError] = useState('');

  // 1. Function to call the API
  const fetchMovie = async () => {
    setError(''); // reset previous errors
    setMovie(null); // reset previous movie

    try {
      const res = await fetch(`/api/movies?title=${encodeURIComponent(title)}`);
      const data = await res.json();

      if (res.ok) {
        setMovie(data); // success
      } else {
        setError(data.error || 'Movie not found');
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  // 2. Function to handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    if (!title) return setError('Please enter a movie title');
    fetchMovie(); // call API
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter movie title"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      {movie && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-xl font-bold">{movie.Title}</h2>
          <p>{movie.Year}</p>
          <p>{movie.Plot}</p>
          {movie.Poster && <img src={movie.Poster} alt={movie.Title} className="mt-2 w-32" />}
        </div>
      )}
    </div>
  );
}
