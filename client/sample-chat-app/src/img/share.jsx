import React from "react";

const myComponentStyle = {
  height: '24px',
  width: '24px',
  cursor: 'pointer',
  marginRight: '10px'
}

function Share(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={myComponentStyle}
      height="24"
      fillRule="evenodd"
      clipRule="evenodd"
      onClick={props.handleNotification}
    >
      <path d="M14 4H1v18h20V11h1v12H0V3h14v1zm10 5h-1V2.707L11.354 14.354l-.708-.708L22.293 2H16V1h8v8z"></path>
    </svg>
  );
}

export default Share;
