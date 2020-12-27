import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  
  return (
    <div className="home-page">
      <span className="home-page__welcome">Welcome To</span>
      <span className="home-page__welcome">
        <span className="home-page_nims">Nim's</span> chat app
      </span>
      <hr />
      <span className="home-page__choose">Choose your name and room</span>
      <span className="home-page__choose">and start chatting</span>

      <div className="home-page__item">
        <h1>JOIN</h1>
        <form className="home-page__form-elm">
          <div className="home-page__form-elm__credentials">
            <label>Name</label>
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label>Room</label>
            <input
              type="text"
              maxLength="7"
              required
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
            {!name || !room ? (
              <button>Join</button>
            ) : (
              <Link to={`/chat-room?name=${name}&room=${room}`}>
                <button>Join</button>
              </Link>
            )}
        </form>
      </div>
    </div>
  );
};

export default HomePage;
