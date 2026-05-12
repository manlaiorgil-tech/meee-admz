import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Spotify Logo SVG
const SpotifyLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

// Play Icon
const PlayIcon = () => (
  <svg className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

// Pause Icon
const PauseIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
);

// Skip Previous
const SkipPrevious = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
  </svg>
);

// Skip Next
const SkipNext = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
  </svg>
);

// Shuffle Icon
const ShuffleIcon = ({ active }) => (
  <svg className={`h-4 w-4 ${active ? 'text-[#1DB954]' : 'text-neutral-400'}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
  </svg>
);

// Repeat Icon
const RepeatIcon = ({ active }) => (
  <svg className={`h-4 w-4 ${active ? 'text-[#1DB954]' : 'text-neutral-400'}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
  </svg>
);

// Volume Icon
const VolumeIcon = ({ level }) => {
  if (level === 0) {
    return (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
      </svg>
    );
  }
  if (level < 50) {
    return (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
    </svg>
  );
};

// Heart Icon
const HeartIcon = ({ filled }) => (
  <svg className={`h-4 w-4 ${filled ? 'text-[#1DB954] fill-[#1DB954]' : 'text-neutral-400'}`} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export default function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [liked, setLiked] = useState(false);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      console.log("[v0] Audio loaded, duration:", audio.duration);
      setDuration(audio.duration);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      if (repeat) {
        audio.currentTime = 0;
        audio.play();
        setIsPlaying(true);
      }
    };
    const handleError = (e) => {
      console.log("[v0] Audio error:", e.target.error);
    };
    const handleCanPlay = () => {
      console.log("[v0] Audio can play");
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [repeat]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

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

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value));
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      {/* Player Card */}
      <div className="rounded-2xl bg-gradient-to-b from-[#282828] to-[#121212] p-6 shadow-2xl">
        {/* Spotify Branding */}
        <div className="flex items-center gap-2 mb-6">
          <SpotifyLogo className="h-6 w-6 text-[#1DB954]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Now Playing</span>
        </div>

        {/* Album Art */}
        <div className="relative mb-6 aspect-square overflow-hidden rounded-lg shadow-xl">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artworks-OlqzAOP2zhZXkf0g-QgyD0Q-t500x500-XptByDnVX6FJsSJtT6ctpZNb0M9Kq2.jpg"
            alt="Album cover"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Track Info */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white truncate">LOVERS</h3>
            <p className="text-sm text-neutral-400 truncate">Valentino</p>
          </div>
          <button 
            onClick={() => setLiked(!liked)}
            className="p-2 transition-transform hover:scale-110"
          >
            <HeartIcon filled={liked} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div 
            ref={progressRef}
            onClick={handleProgressClick}
            className="group relative h-1 w-full cursor-pointer rounded-full bg-neutral-600"
          >
            <div 
              className="absolute left-0 top-0 h-full rounded-full bg-white group-hover:bg-[#1DB954] transition-colors"
              style={{ width: `${progress}%` }}
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-neutral-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button 
            onClick={() => setShuffle(!shuffle)}
            className="transition-transform hover:scale-110"
          >
            <ShuffleIcon active={shuffle} />
          </button>
          <button className="text-neutral-400 transition-all hover:text-white hover:scale-110">
            <SkipPrevious />
          </button>
          <button
            onClick={togglePlay}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button className="text-neutral-400 transition-all hover:text-white hover:scale-110">
            <SkipNext />
          </button>
          <button 
            onClick={() => setRepeat(!repeat)}
            className="transition-transform hover:scale-110"
          >
            <RepeatIcon active={repeat} />
          </button>
        </div>

        {/* Volume Control */}
        <div className="mt-6 flex items-center gap-3">
          <button className="text-neutral-400 hover:text-white transition-colors">
            <VolumeIcon level={volume} />
          </button>
          <div className="relative flex-1">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="spotify-volume-slider w-full h-1 rounded-full appearance-none cursor-pointer bg-neutral-600"
              style={{
                background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${volume}%, #4d4d4d ${volume}%, #4d4d4d 100%)`
              }}
            />
          </div>
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} src="/Valentino%20-%20LOVERS.mp3" preload="metadata" />
      </div>

      {/* Custom Styles */}
      <style>{`
        .spotify-volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .spotify-volume-slider:hover::-webkit-slider-thumb {
          opacity: 1;
        }
        .spotify-volume-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .spotify-volume-slider:hover::-moz-range-thumb {
          opacity: 1;
        }
      `}</style>
    </motion.div>
  );
}
