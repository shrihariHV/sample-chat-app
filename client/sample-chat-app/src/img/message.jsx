import React from "react";

const myComponentStyle = {
  height: '1rem',
  width: '1rem'
}

function Message(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      fill="#fff"
      enableBackground="new 0 0 348.165 348.165"
      version="1.1"
      viewBox="0 0 348.165 348.165"
      xmlSpace="preserve"
      style={myComponentStyle}
      onClick={props.handleOpen}
    >
      <path d="M0 60.58L0 71.921 174.083 193.19 348.165 71.921 348.165 60.58z"></path>
      <path d="M174.083 217.356L71.545 145.228 0 95.39 0 287.585 348.165 287.585 348.165 95.39 276.62 145.228z"></path>
    </svg>
  );
}

export default Message;