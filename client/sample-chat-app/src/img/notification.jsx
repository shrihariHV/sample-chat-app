import React from "react";

const myComponentStyle = {
  height: '1rem',
  width: '1rem'
}

function Notification(props) {
  return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      fill="#fff"
      enableBackground="new 0 0 510 510"
      version="1.1"
      viewBox="0 0 510 510"
      xmlSpace="preserve"
      style={myComponentStyle}
      onClick={props.handleOpen}
    >
      <g transform="matrix(.87659 0 0 .87659 31.47 31.47)">
        <g>
          <path d="M255 510c28.05 0 51-22.95 51-51H204c0 28.05 22.95 51 51 51zm165.75-153V216.75c0-79.05-53.55-142.8-127.5-160.65V38.25C293.25 17.85 275.4 0 255 0s-38.25 17.85-38.25 38.25V56.1c-73.95 17.85-127.5 81.6-127.5 160.65V357l-51 51v25.5h433.5V408l-51-51z"></path>
        </g>
      </g>
    </svg>
  );
}

export default Notification;