import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './MessageForm.css';

const MessageForm = (props) => {
  return (
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar__room-name">
          <span>{props.room}</span>
        </div>
        <div className="chat__sidebar__users-head">Users</div>
        {/* users from props here is an array of objects */}
        {
         props.users.map((user, index) => {
          return (
            <div className="chat__sidebar__room-users">
              { user.map((u) => {
                return <div>{u.name}</div>;
              })}
            </div>
          );
        })}
      </div>
      <div className="chat__messages-container">
        <ScrollToBottom className="chat__chat-messages">{props.children}</ScrollToBottom>
        <div className="message">
          <form className="message__form" >
            <input
              onChange={(e) => props.onChange(e.target.value)}
              type='text'
              placeholder="Message"
              value={props.message}
              required
              autoComplete="off"   
            />
            <button onClick={props.clicked}>send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
