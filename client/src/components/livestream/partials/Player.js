import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "../../../assets/fonts/ravenda/stream.css";

const socket = io.connect("http://localhost:3001");

const Player = ({ user }) => {
  const twitchid = localStorage.getItem("linkurl");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [sentMessages, setSentMessages] = useState(() => {
    const storedMessages = localStorage.getItem(`${twitchid}-messages`);
    return storedMessages ? JSON.parse(storedMessages) : [];
  });

  const sendMessage = () => {
    const messageData = { message, room, sender: user.firstName };
    socket.emit("send_message", messageData);
    console.log("message sent");

    const newMessages = [...sentMessages, messageData];
    setSentMessages(newMessages);

    // Store the messages in local storage
    localStorage.setItem(`${twitchid}-messages`, JSON.stringify(newMessages));
  };

  const fetchMessages = () => {
    const storedMessages = localStorage.getItem(`${twitchid}-messages`);
    setSentMessages(storedMessages ? JSON.parse(storedMessages) : []);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setSentMessages((prevMessages) => [...prevMessages, data]);
    });
  }, [socket]);

  useEffect(() => {
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const list = document.querySelector("ul");

  list.querySelectorAll("li").forEach((li) => {
    if (!li.classList.contains(twitchid)) {
      li.style.display = "none";
    }
  });

  return (
    <div>
      <div className="twitch-player-container w-2/3">
        <div className="twitch-player-overlay1"></div>
        <div className="twitch-player-overlay2"></div>

        <div className="twitch-player-overlay"></div>
        <iframe
          src={`https://player.twitch.tv/?channel=${twitchid}&parent=livestream-tickets.herokuapp.com&autoplay=true&muted=false`}
          frameBorder="0"
          allowFullScreen="true"
          scrolling="no"
          height="378"
          width="620"
          background-color="rgba(0, 0, 0, .5)"
        ></iframe>
        {/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px' }}>
            Text in the middle
          </div> */}
      </div>
      <h2 className="profile-label">Leave comments as {user.firstName}</h2>
      <div className="App w-2/3">
        <input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log("hello");
            sendMessage();
          }}
        >
          Send Message
        </button>
        <h1> Message:</h1>
        {messageReceived}
        <h1>Sent Messages:</h1>
        <ul>
          {sentMessages.map((messageData, index) => (
            <li key={index} className={twitchid}>
              {messageData.sender} - {messageData.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Player;
