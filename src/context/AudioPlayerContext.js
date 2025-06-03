import { useAudioPlayer as useExpoAudioPlayer } from 'expo-audio';
import { createContext, useContext, useEffect, useState } from 'react';

const AudioPlayerContext = createContext(null);

export const AudioPlayerProvider = ({ children }) => {
  const player = useExpoAudioPlayer({ uri: '' });

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(player.currentTime); // in seconds
      setDuration(player.duration);       // in seconds
    }, 500); // update every 500ms

    return () => {
      clearInterval(interval);
      player.remove();
    };
  }, []);

  const play = async (url) => {
    try {
      await player.replace({ uri: url });
      await player.play();
    } catch (err) {
      console.error('Error playing audio:', err);
    }
  };

  const pause = async () => {
    try {
      await player.pause();
    } catch (err) {
      console.error('Error pausing audio:', err);
    }
  };

  const stop = async () => {
    try {
      await player.stop();
    } catch (err) {
      console.error('Error stopping audio:', err);
    }
  };

  const resume = async () => {
    try {
      await player.play(); // resumes from current position
    } catch (err) {
      console.error('Error resuming audio:', err);
    }
  };

  const seekTo = async (seconds) => {
  try {
    await player.seekTo(seconds);
  } catch (err) {
    console.error('Error seeking audio:', err);
  }
};

  return (
    <AudioPlayerContext.Provider value={{ play, pause, stop, currentTime, duration, resume, seekTo }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => useContext(AudioPlayerContext);
