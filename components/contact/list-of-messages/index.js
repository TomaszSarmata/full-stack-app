import { useState } from "react";

export default function ListOfMessages({ messages, isLoading }) {
  return isLoading ? (
    <div className="grid grid-cols-3  gap-6 w-4/5 px-2 mx-auto">
      <div className="bg-gray-200 py-4 px-8 rounded-lg h-28 animate-pulse"></div>
      <div className="bg-gray-200 py-4 px-8 rounded-lg h-28 animate-pulse"></div>
      <div className="bg-gray-200 py-4 px-8 rounded-lg h-28 animate-pulse"></div>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2 sm:px-6 mx-auto">
      {messages.map((message, index) => (
        <div key={index} className="bg-blue-100 py-4 px-8 rounded-lg shadow">
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
