import React from "react";
import { useMessage } from "../Register Login Custom Hook/MessageContext";


const Message = () => {
  const { message, type, clearMessages } = useMessage();

  
  if (!message) return null;


  const messageClass = type === "success" 
    ? "message message-success" 
    : "message message-error";

  return (
    <div className={messageClass} >
      <div className="message-content flex items-center justify-center">
        <span className="message-text flex items-center justify-center">{message}</span>
        <button 
          className="message-close" 
          onClick={clearMessages} 
          aria-label="Close message"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Message;
