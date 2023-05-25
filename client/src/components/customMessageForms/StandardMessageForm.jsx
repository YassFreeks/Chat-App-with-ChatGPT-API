// =======================================================================================================
// This code defines a functional React component called MessageFormUI that renders a form for sending messages. The form includes an input field for typing the message text, and icons for attaching a file, sending the message, and previewing an attached image. When a file is attached, it is displayed as a preview image and can be removed by clicking on an "X" icon. The form also has a feature to append text to the message, and a feature to send a message by pressing the Enter key. The component uses the Dropzone package to handle the file attachment functionality.
// =======================================================================================================

import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";

const StandardMessageForm = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: at,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    setMessage("");
    setAttachment("");
  };

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default StandardMessageForm;

