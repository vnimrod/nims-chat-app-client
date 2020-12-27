import { Fragment, useEffect, useState } from 'react';
import IOClient from 'socket.io-client';
import queryString from 'query-string';


import Messages from '../Messages/Messages';
import MessageForm from '../MessageForm/MessageForm';

const SERVER_URL = 'http://127.0.0.1:5000';

let socket;

const ChatRoom = ({ location, history }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [roomUsers, setRoomUsers] = useState([])
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = IOClient(SERVER_URL, {wsEngine: 'ws'});

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (err) => {
      history.push('/');
      alert('Error! ' + err)
    });
    return () => {
      socket.disconnect()
      socket.off();
    };
  }, [location.search,history]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(messages => [ ...messages, message ]);
      console.log(1)
    });
  }, []);

  useEffect(()=> {
    socket.on('roomUsers', (users) => {
      setRoomUsers([users.roomUsers])
    })
  },[])
  
  const sendMessageHandler = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => {
        setMessage('');
      });
    }
  };

  return (
    <Fragment>
      <MessageForm message={message} room={room} users={roomUsers} onChange={setMessage} clicked={sendMessageHandler}>
        <Messages messages={messages} />
      </MessageForm>
    </Fragment>
  );
};

export default ChatRoom;
