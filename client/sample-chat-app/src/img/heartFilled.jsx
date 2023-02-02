import React from "react";

const myComponentStyle = {
  height: '24px',
  width: '24px',
  cursor: 'pointer',
  marginRight: '10px'
}

function HeartFilled() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#dc143c"
      viewBox="0 0 24 24"
      style={myComponentStyle}
    >
      <path d="M12 4.248C8.852-1.154 0 .423 0 7.192 0 11.853 5.571 16.619 12 23c6.43-6.381 12-11.147 12-15.808C24 .4 15.125-1.114 12 4.248z"></path>
    </svg>
  );
}

export default HeartFilled;