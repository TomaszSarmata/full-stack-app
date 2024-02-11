import LoadingMessages from "@/components/shared/loading/messages";
import { useEffect } from "react";
import { useState } from "react";

export default function ListOfMessages() {
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    setIsLoading(true);
    const response = await fetch(`api/get-messages`);
    const data = await response.json();
    const { messages } = data;
    setMessages(messages);
    setIsLoading(false);
  };

  return isLoading ? (
    <div className="grid grid-cols-3 px-10 gap-4">
      <LoadingMessages></LoadingMessages>
      <LoadingMessages></LoadingMessages>
      <LoadingMessages></LoadingMessages>
    </div>
  ) : (
    <div className="grid grid-cols-3  gap-6 w-4/5 px-2 mx-auto">
      {messages.map((message, index) => (
        <div key={index} className="bg-blue-100 py-4 px-8 rounded-lg">
          <p className="font-medium text-xl border-b-2 border-gray-400 border-opacity-40">
            {message.name}
          </p>
          <p>
            {message.email ? (
              message.email
            ) : (
              <span className="italic text-gray-500">No Email Provided</span>
            )}
          </p>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}
