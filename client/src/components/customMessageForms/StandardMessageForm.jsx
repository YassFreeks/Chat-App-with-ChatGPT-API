// =======================================================================================================
// This code defines a functional React component called MessageFormUI that renders a form for sending messages. The form includes an input field for typing the message text, and icons for attaching a file, sending the message, and previewing an attached image. When a file is attached, it is displayed as a preview image and can be removed by clicking on an "X" icon. The form also has a feature to append text to the message, and a feature to send a message by pressing the Enter key. The component uses the Dropzone package to handle the file attachment functionality.
// =======================================================================================================

// Import icons, React, and the Dropzone component
import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

// Define a functional component called MessageFormUI, which receives props
const StandardMessageForm = ({ props, activeChat }) => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");

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
        <div className="message-form-container">
            {preview && (
                <div className="message-form-preview">
                    <img
                        alt="message-form-preview"
                        className="message-form-preview-image"
                        src={preview}
                        onLoad={() => URL.revokeObjectURL(preview)}
                    />
                    <XMarkIcon
                        className="message-form-icon-x"
                        onClick={() => {
                            setPreview("");
                            setAttachment("");
                        }}
                    />
                </div>
            )}
            {/* {The following code defines the UI for the message form} */}
            <div className="message-form">
                <div className="message-form-input-container">
                    <input
                        className="message-form-input"
                        type="text"
                        value={message}
                        onChange={handleChange}
                        placeholder="Send a message..."
                    />
                </div>
                <div className="message-form-icons">
                    <Dropzone
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        noClick={true}
                        onDrop={(acceptedFiles) => {
                            setAttachment(acceptedFiles[0]);
                            setPreview(URL.createObjectURL(acceptedFiles[0]));
                        }}
                    >
                        {({ getRootProps, getInputProps, open }) => (
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <PaperClipIcon
                                    className="message-form-icon-clip"
                                    onClick={open}
                                />
                            </div>
                        )}
                    </Dropzone>

                    <hr className="vertical-line" />
                    <PaperAirplaneIcon
                        className="message-form-icon-airplane"
                        onClick={() => {
                            setPreview("");
                            handleSubmit();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StandardMessageForm;


