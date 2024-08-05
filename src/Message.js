import React, { useState } from 'react';

const Message = () => {
  const [message, setMessage] = useState("Welcome Visitor!");

  const changeMessage = () => {
    setMessage("Thank You for Visit!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click Me!</button>
    </div>
  );
};

export default Message;
