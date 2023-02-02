import React from 'react'
import './Navbar.css'
import Notification from '../../img/notification.jsx'
import Message from '../../img/message.jsx'
import Settings from '../../img/settings.jsx'
import { useEffect, useState } from 'react'

const Navbar = ({socket}) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    socket.on('getNotification', data => {
        setNotifications((prev) => [...prev, data])
    })
  }, [socket])

  const displayNotification = ({ senderName, type }) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return (
      <span className="notification">{`${senderName} ${action} your post.`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className='navbar'>
        <div className="logo">Hari App</div>
        <div className="icons">
            <div className="icon">
                <Notification handleOpen = {() => setOpen(!open)}/>
                {
                    notifications.length >0 &&
                    <div className="counter">{notifications.length}</div>
                }
            </div>
            <div className="icon">
                <Message handleOpen = {() => setOpen(!open)}/>
            </div>
            <div className="icon">
                <Settings handleOpen = {() => setOpen(!open)}/>
            </div>
        </div>
        {open && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar