import { Text, TouchableOpacity, View } from 'react-native';
import { useAudioPlayer } from '../../context/AudioPlayerContext';

const words = [
  { word: 'Bismillah 1', url: 'https://audio.qurancdn.com/wbw/001_001_001.mp3' },
  { word: 'Bismillah 2', url: 'https://audio.qurancdn.com/wbw/001_001_002.mp3' },
  { word: 'Bismillah 3', url: 'https://audio.qurancdn.com/wbw/001_001_003.mp3' },
  { word: 'Bismillah 4', url: 'https://audio.qurancdn.com/wbw/001_001_004.mp3' },
  { word: 'Verse 1', url: 'https://audio.qurancdn.com/Alafasy/mp3/001002.mp3' },
  { word: 'Full Surah', url: 'https://download.quranicaudio.com/qdc/mishari_al_afasy/murattal/1.mp3' },
];

export default function QuranScreen() {
  const { play, pause } = useAudioPlayer();

  return (
    <View style={{ padding: 20 }}>
      {words.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => play(item.url)}
          style={{ marginBottom: 20 }}
        >
          <Text style={{ fontSize: 24 }}>{item.word}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={pause}>
        <Text style={{ fontSize: 20, color: 'red' }}>Pause</Text>
      </TouchableOpacity>
    </View>
  );
}
