


'use client';

import { useState } from 'react';

interface MovieFormProps {
  onSearch: (title: string) => void;
}

export default function MovieForm({onSearch}:MovieFormProps) {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Please enter a movie title');
      return;
    }

    try { onSearch(title.trim())

     
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter movie title"
        className="border p-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}