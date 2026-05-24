import { useCallback, useEffect, useRef, useState } from 'react';

const GRID_SIZE = 15;
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_FOOD = { x: 10, y: 10 };
const INITIAL_DIRECTION = { x: 1, y: 0 };

const getRandomFood = (snake) => {
  let nextFood = INITIAL_FOOD;
  do {
    nextFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((part) => part.x === nextFood.x && part.y === nextFood.y));
  return nextFood;
};

const isOppositeDirection = (current, next) =>
  current.x + next.x === 0 && current.y + next.y === 0;

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const touchStart = useRef(null);
  const directionRef = useRef(INITIAL_DIRECTION);

  const changeDirection = useCallback((nextDirection) => {
    setDirection((current) => {
      if (isOppositeDirection(current, nextDirection)) return current;
      directionRef.current = nextDirection;
      return nextDirection;
    });
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      const keyDirections = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      };
      const nextDirection = keyDirections[event.key];
      if (!nextDirection) return;
      event.preventDefault();
      changeDirection(nextDirection);
    };
    window.addEventListener('keydown', handleKey, { passive: false });
    return () => window.removeEventListener('keydown', handleKey);
  }, [changeDirection]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setSnake((previousSnake) => {
        const currentDirection = directionRef.current;
        const head = {
          x: previousSnake[0].x + currentDirection.x,
          y: previousSnake[0].y + currentDirection.y,
        };
        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= GRID_SIZE ||
          head.y >= GRID_SIZE ||
          previousSnake.some((part) => part.x === head.x && part.y === head.y)
        ) {
          setGameOver(true);
          return previousSnake;
        }
        const nextSnake = [head, ...previousSnake];
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 1);
          setFood(getRandomFood(nextSnake));
        } else {
          nextSnake.pop();
        }
        return nextSnake;
      });
    }, 145);
    return () => clearInterval(interval);
  }, [food, gameOver]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setScore(0);
    setGameOver(false);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const diffX = touch.clientX - touchStart.current.x;
    const diffY = touch.clientY - touchStart.current.y;
    if (Math.max(Math.abs(diffX), Math.abs(diffY)) < 24) return;
    if (Math.abs(diffX) > Math.abs(diffY)) {
      changeDirection(diffX > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 });
    } else {
      changeDirection(diffY > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 });
    }
    touchStart.current = null;
  };

  return (
    <div className="border border-border p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Snake</p>
          <p className="mt-1 text-xs text-muted">Arrow keys / swipe</p>
        </div>
        <p className="text-sm">Score · {score}</p>
      </div>

      <div
        className="snake-board grid gap-px bg-border p-px"
        style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label="Playable snake game. Use arrow keys, WASD, swipe, or the buttons."
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
          const x = index % GRID_SIZE;
          const y = Math.floor(index / GRID_SIZE);
          const isSnake = snake.some((part) => part.x === x && part.y === y);
          const isFood = food.x === x && food.y === y;
          return (
            <div
              key={index}
              className={`aspect-square transition-colors ${
                isSnake
                  ? 'bg-charcoal'
                  : isFood
                  ? 'bg-charcoal/40'
                  : 'bg-cream'
              }`}
            />
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2 sm:hidden">
        <div />
        <button type="button" onClick={() => changeDirection({ x: 0, y: -1 })} className="game-btn">↑</button>
        <div />
        <button type="button" onClick={() => changeDirection({ x: -1, y: 0 })} className="game-btn">←</button>
        <button type="button" onClick={resetGame} className="game-btn text-[10px]">Reset</button>
        <button type="button" onClick={() => changeDirection({ x: 1, y: 0 })} className="game-btn">→</button>
        <div />
        <button type="button" onClick={() => changeDirection({ x: 0, y: 1 })} className="game-btn">↓</button>
        <div />
      </div>

      <div className="mt-6 hidden flex-wrap gap-2 sm:flex">
        <button type="button" onClick={() => changeDirection({ x: 0, y: -1 })} className="game-btn">↑</button>
        <button type="button" onClick={() => changeDirection({ x: -1, y: 0 })} className="game-btn">←</button>
        <button type="button" onClick={() => changeDirection({ x: 1, y: 0 })} className="game-btn">→</button>
        <button type="button" onClick={() => changeDirection({ x: 0, y: 1 })} className="game-btn">↓</button>
        <button type="button" onClick={resetGame} className="game-btn px-4 text-xs">Restart</button>
      </div>

      {gameOver && (
        <div className="mt-6 border border-border p-4">
          <p className="text-sm">Game over — Score {score}</p>
          <button
            type="button"
            onClick={resetGame}
            className="mt-3 border border-charcoal px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-charcoal hover:text-cream"
          >
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
