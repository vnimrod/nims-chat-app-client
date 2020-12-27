import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage'
import ChatRoom from './components/ChatRoom/ChatRoom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/chat-room" exact component={ChatRoom}/>
      </Router>
    </div>
   );
}

export default App;
