import React from 'react';

import './Message.css';

const Message = (props) => {
  return (
    <div>
      <span className="user">
        <strong>{props.message.admin? props.message.admin : props.message.user}</strong>: {props.message.currentTime}
      </span>
      <span>{props.message.name} {props.message.message}</span>
    </div>
  );
};

export default Message;
