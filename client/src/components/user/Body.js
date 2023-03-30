import React, { useEffect } from "react";


// This body is the Tickets body
import TicketBody from './tickets/TicketBody';
import TicketForm from './tickets/TicketForm'

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

const Body = ({ user }) => {
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'row', height: '50vh' }}>
        <div style={{ width: '50%', height: '100%', backgroundColor: '#FF6961' }}>
          <h1>These four coloured squares comprise the User Body Component, not to be confused with the tickets one.</h1>
        </div>
        <div style={{ width: '50%', height: '100%', backgroundColor: '#ADD8E6' }}>
          <TicketBody user={user} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', height: '50vh' }}>
        <div style={{ width: '50%', height: '100%', backgroundColor: '#77DD77' }}>
          <h1>Green Square</h1>
          <YoutubePlayer />
        </div>
        <div style={{ width: '50%', height: '100%', backgroundColor: '#FFFACD' }}>
          <TicketForm/>
        </div>
      </div>
    </div>
  );
};

export default Body;
