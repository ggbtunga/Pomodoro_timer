import React, { useRef } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <audio ref={audioRef} src="./assets/sounds/clock_tick.mp3"></audio>
      <button onClick={playAudio}>Play Audio</button>
    </div>
  );
};

export default AudioPlayer;
