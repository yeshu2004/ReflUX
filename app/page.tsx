export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-indigo-600 uppercase">ReflUX</span> - UI/UX Workshop
        </h1>
        <p className="text-gray-400 mt-6 text-lg md:text-xl">
          A hands-on creative experience in user interface & user experience design.
        </p>
        <p className="text-xl md:text-2xl font-semibold mt-10 text-white">
          Launching Soon...
        </p>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition"
        >
          Notify Me
        </a>
      </div>

      <footer className="absolute bottom-6 text-gray-500 text-sm">
        © 2025 Reflux. All rights reserved.
      </footer>
    </main>
  );
}
