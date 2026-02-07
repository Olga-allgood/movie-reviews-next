import MovieSearch from './components/Home'; // adjust the path if needed

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="p-4 bg-blue-600 text-white font-bold">
          My Movie App
        </header>

        {/* Here we include your component */}
        <main className="p-8">
          <MovieSearch />
        </main>

        <footer className="p-4 text-center text-gray-500">
          © 2026 My Movie App
        </footer>
      </body>
    </html>
  );
}