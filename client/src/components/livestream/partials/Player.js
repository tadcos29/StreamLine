import React, { useEffect } from "react";



const Player = ({ user }) => {
  const YoutubePlayer = () => {
    let player;
  
    const initPlayer = () => {
      player = new window.YT.Player('player', {
        videoId: 'vB5TWxYmK4E',
        playerVars: {
          'autoplay': 1,
          'controls': 1,
          'mute': 0
        },
        events: {
          'onReady': onPlayerReady
        }
      });
    };
  
    const onPlayerReady = (event) => {
      event.target.playVideo();
    };
  
    useEffect(() => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
  
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
      window.onYouTubeIframeAPIReady = initPlayer;
  
      return () => {
        window.onYouTubeIframeAPIReady = null;
      };
    }, []);
  
    return (
      <div id="player"></div>
    );
  };


  return (
    <div>
    <h2>Player</h2>
    <YoutubePlayer/>
    </div>
  );
};

export default Player;