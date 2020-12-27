import React from 'react';


import Message from './Message';
import './Messages.css';
const Messages = (props) => {
  return (
    <div className="messages">
      {props.messages.map((message, index) => (
        <div key={index}>{<Message key={index} message={message} />}</div>
      ))}
    </div>
  );
};

export default Messages;
