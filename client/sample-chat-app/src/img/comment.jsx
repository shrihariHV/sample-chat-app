import React from "react";

const myComponentStyle = {
  height: '24px',
  width: '24px',
  cursor: 'pointer',
  marginRight: '10px'
}

function Comment(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={myComponentStyle}
      fillRule="evenodd"
      clipRule="evenodd"
      onClick={props.handleNotification}
    >
      <path d="M12 1C5.662 1 0 5.226 0 11.007c0 2.05.739 4.063 2.047 5.625L.054 23 7 20a19.51 19.51 0 004.864.641c7.174 0 12.136-4.439 12.136-9.634C24 5.195 18.299 1 12 1m0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695L1.66 21.217l1.505-4.808C1.857 14.845 1 13.281 1 11.007 1 6.041 5.935 2 12 2"></path>
    </svg>
  );
}

export default Comment;
