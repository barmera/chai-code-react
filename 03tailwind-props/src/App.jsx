import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-white p-4 rounded-2xl">Tailwind Test</h1>

      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://images.pexels.com/photos/25630344/pexels-photo-25630344/free-photo-of-ai-generated-graphic-with-random-icons.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
        <div className="flex items-center md:items-start">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
