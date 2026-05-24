import { useState, useRef, useEffect } from 'react';

const PlayIcon = () => (
  <svg className="h-5 w-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

export default function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="border border-border p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Now Playing</p>
          <p className="mt-1 text-xs text-muted">Local audio</p>
        </div>
      </div>

      <div className="relative aspect-square overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artworks-OlqzAOP2zhZXkf0g-QgyD0Q-t500x500-XptByDnVX6FJsSJtT6ctpZNb0M9Kq2.jpg"
          alt="Album cover"
          loading="lazy"
          width={500}
          height={500}
          className="h-full w-full object-cover grayscale"
        />
      </div>

      <div className="mt-6 flex items-baseline justify-between">
        <div>
          <h3 className="text-xl tracking-tightest">LOVERS</h3>
          <p className="mt-1 text-sm text-muted">Valentino</p>
        </div>
        <button
          onClick={togglePlay}
          className="flex h-12 w-12 items-center justify-center border border-charcoal transition-colors hover:bg-charcoal hover:text-cream"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      <div className="mt-6">
        <div
          ref={progressRef}
          onClick={handleProgressClick}
          className="group relative h-px w-full cursor-pointer bg-border"
        >
          <div
            className="absolute left-0 top-0 h-full bg-charcoal"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <audio ref={audioRef} src="/Valentino%20-%20LOVERS.mp3" preload="metadata" />
    </div>
  );
}
