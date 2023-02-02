import React from 'react'
import './Card.css'
import Heart from '../../img/heart'
import HeartFilled from '../../img/heartFilled'
import Comment from '../../img/comment'
import Share from '../../img/share'
import Info from '../../img/info'
import { useState } from 'react'



const Card = ({post, socket, user}) => {
  const [liked, setliked] = useState(false)
  const handleNotification = (type) => {
    type === 1 &&setliked(true)
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type: type
    })
  }

  return (
    <div className='card'>
        <div className="info">
            <img src={post.userImg} alt="" className='userImg' />
            <span>{post.fullname}</span>
        </div>
        <img src={post.postImg} alt="" className='postImg'/>
        <div className="interaction">
            {liked ? (<HeartFilled/>) : (<Heart handleNotification={() => handleNotification(1)}/>)}
            <Comment handleNotification={() => handleNotification(2)}/>
            <Share handleNotification={() => handleNotification(3)}/>
            <Info/>
        </div>
    </div>
  )
}

export default Card