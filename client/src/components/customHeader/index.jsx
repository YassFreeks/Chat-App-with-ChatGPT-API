// Import React and icons from the @heroicons/react library
import React from "react";
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

// Define a functional component called CustomerHeader, which receives a prop called 'chat'
const CustomerHeader = ({ chat }) => {
  return (
    <div className="chat-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="icon-chat" />
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="icon-phone" />
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="header-text">{chat.description}</p>
        ) : (
          <p className="header-text">no chat selected</p>
        )}
      </div>
    </div>
  );
};

// Export the CustomerHeader component
export default CustomerHeader;


// Overall, this component provides a basic UI for displaying information about a chat, and can be used in a larger chat application to render chat headers.