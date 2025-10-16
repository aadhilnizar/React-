// src/contexts/MessageContext.js
import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState(null); // "success" or "error"

  const showMessage = (msg, msgType) => {
    setMessage(msg);
    setType(msgType);

    setTimeout(() => {
      clearMessages();
    }, 5000);
  };

  const showError = (msg) => showMessage(msg, "error");
  const showSuccess = (msg) => showMessage(msg, "success");
  const clearMessages = () => {
    setMessage("");
    setType(null);
  };

  const getMessageStyle = () =>
    type === "success"
      ? "bg-green-100 text-green-700 border border-green-400 p-2 rounded mb-3 text-center"
      : type === "error"
      ? "bg-red-100 text-red-700 border border-red-400 p-2 rounded mb-3 text-center"
      : "hidden";

  return (
    <MessageContext.Provider
      value={{ message, type, showError, showSuccess, clearMessages, getMessageStyle }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) throw new Error("useMessage must be used within a MessageProvider");
  return context;
};
