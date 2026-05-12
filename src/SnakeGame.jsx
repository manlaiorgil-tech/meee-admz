import { useEffect, useState } from 'react';

const GRID_SIZE = 15;
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const FOOD = { x: 10, y: 10 };

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(FOOD);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowUp') setDirection({ x: 0, y: -1 });
      if (e.key === 'ArrowDown') setDirection({ x: 0, y: 1 });
      if (e.key === 'ArrowLeft') setDirection({ x: -1, y: 0 });
      if (e.key === 'ArrowRight') setDirection({ x: 1, y: 0 });
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = {
          x: prev[0].x + direction.x,
          y: prev[0].y + direction.y,
        };

        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= GRID_SIZE ||
          head.y >= GRID_SIZE ||
          prev.some((s) => s.x === head.x && s.y === head.y)
        ) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [head, ...prev];

        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 1);
          setFood({
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
          });
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 140);

    return () => clearInterval(interval);
  }, [direction, food, gameOver]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(FOOD);
    setDirection({ x: 1, y: 0 });
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between text-white">
        <h3 className="font-serif text-2xl">Snake Game</h3>
        <p>Score: {score}</p>
      </div>

      <div
        className="grid gap-[2px] rounded-xl bg-neutral-900 p-2"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
          const x = index % GRID_SIZE;
          const y = Math.floor(index / GRID_SIZE);
          const isSnake = snake.some((s) => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={index}
              className={`aspect-square rounded-sm ${
                isSnake
                  ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50'
                  : isFood
                  ? 'bg-pink-400'
                  : 'bg-neutral-800'
              }`}
            />
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button onClick={() => setDirection({ x: 0, y: -1 })} className="rounded-full bg-white/10 px-4 py-2 text-white">↑</button>
        <button onClick={() => setDirection({ x: -1, y: 0 })} className="rounded-full bg-white/10 px-4 py-2 text-white">←</button>
        <button onClick={() => setDirection({ x: 1, y: 0 })} className="rounded-full bg-white/10 px-4 py-2 text-white">→</button>
        <button onClick={() => setDirection({ x: 0, y: 1 })} className="rounded-full bg-white/10 px-4 py-2 text-white">↓</button>
      </div>

      {gameOver && (
        <div className="mt-4 text-white">
          <p className="mb-3 text-lg">Game Over</p>
          <button onClick={resetGame} className="rounded-full bg-white px-5 py-2 text-black">Restart</button>
        </div>
      )}
    </div>
  );
}
