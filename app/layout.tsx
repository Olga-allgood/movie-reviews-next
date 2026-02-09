import MovieSearch from './components/Home'; // adjust the path if needed


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header>
          <h2>Movies</h2>
        </header>
       
        <main> {children}</main>
      </body>
    </html>
  );
}