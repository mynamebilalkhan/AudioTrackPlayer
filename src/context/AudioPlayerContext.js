import { useAudioPlayer as useExpoAudioPlayer } from 'expo-audio';
import { createContext, useContext, useEffect } from 'react';

const AudioPlayerContext = createContext(null);

export const AudioPlayerProvider = ({ children }) => {
  // You can initialize with empty URI, and replace it on play
  const player = useExpoAudioPlayer({ uri: '' });

  useEffect(() => {
    return () => {
      player.remove(); // Cleanup on unmount
    };
  }, []);

  const play = async (url) => {
    try {
      await player.replace({ uri: url }); // Load new URL
      await player.play();                // Play it
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

  return (
    <AudioPlayerContext.Provider value={{ play, pause, stop }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => useContext(AudioPlayerContext);
