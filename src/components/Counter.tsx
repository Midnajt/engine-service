import { useState } from "react";

interface CounterProps {
  initialValue?: number;
  title?: string;
}

export default function Counter({ initialValue = 0, title = "React Counter" }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
        {title}
      </h2>

      <div className="text-center space-y-6">
        {/* Counter Display */}
        <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-6 border border-blue-300/20">
          <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            {count}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={decrement}
            className="bg-red-500/80 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg border border-red-400/50 backdrop-blur-sm"
          >
            - Minus
          </button>

          <button
            onClick={reset}
            className="bg-gray-600/80 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg border border-gray-400/50 backdrop-blur-sm"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="bg-green-500/80 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg border border-green-400/50 backdrop-blur-sm"
          >
            + Plus
          </button>
        </div>

        {/* Info */}
        <p className="text-blue-200/80 text-sm">Kliknij przyciski aby zmienić wartość countera!</p>
      </div>
    </div>
  );
}
