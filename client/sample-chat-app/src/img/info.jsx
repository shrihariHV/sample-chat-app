import React from "react";

const myComponentStyle = {
  height: '24px',
  width: '24px',
  cursor: 'pointer',
  marginRight: '10px',
  position: 'absolute',
  right: 0
}

function Info() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={myComponentStyle}
      fill="#555"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11S1 18.071 1 12 5.929 1 12 1zm.5 17h-1V9h1v9zM12 6a.845.845 0 110 1.69A.845.845 0 0112 6z"></path>
    </svg>
  );
}

export default Info;
