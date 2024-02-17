import { useState } from "react";
import MessageItem from "./message-item";

export default function ListOfMessages({ messages, isLoading, getMessages }) {
  const [successMessage, setSuccessMessage] = useState("");
  const handleDelete = async (messageId) => {
    const response = await fetch(`/api/delete-message?messageId=${messageId}`);
    const data = await response.json();
    getMessages();
    setSuccessMessage(data.message);
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };
  return isLoading ? (
    <div className="grid grid-cols-3  gap-6 w-4/5 px-2 mx-auto">
      <div className="bg-gray-200 py-4 px-8 rounded-lg h-28 animate-pulse"></div>
      <div className="bg-gray-200 py-4 px-8 rounded-lg h-28 animate-pulse"></div>
      <div className="bg-gray-200 py-4 px-8 rounded-lg h-28 animate-pulse"></div>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 sm:px-6 mx-auto">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          onDelete={(messageId) => {
            handleDelete(messageId);
          }}
        ></MessageItem>
      ))}
      <span className="absolute left-1/2 translate-x-[-50%] translate-y-[-150%] text-green-500">
        {successMessage}
      </span>
    </div>
  );
}
