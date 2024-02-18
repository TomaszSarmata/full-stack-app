import { useState } from "react";

export default function MessageItem({ message, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpacity, setModalOpacity] = useState(false);

  const handleModal = () => {
    setModalOpacity(!modalOpacity);
  };

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className="bg-blue-100 py-4 px-8 rounded-lg shadow relative"
    >
      <span
        className={`absolute z-50 right-0 top-0 translate-x-[60%] translate-y-[-60%] px-2 bg-red-400 text-white rounded-full cursor-pointer opacity-0 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        } text-xl`}
        onClick={handleModal}
      >
        X
      </span>
      <div
        className={`h-full w-full absolute top-0 left-0 bg-gray-50 flex flex-col justify-center items-center rounded-lg transition-opacity duration-500 ${
          modalOpacity ? "opacity-95" : "opacity-0"
        }`}
      >
        <div className="mb-2">Delete Message?</div>
        <div className="w-full flex justify-center gap-x-2">
          <button
            disabled={!modalOpacity}
            className="w-1/5 bg-red-500 text-white px-2 py-1 rounded flex gap-2"
            onClick={() => onDelete(message.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash-2"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
            <span>Yes</span>
          </button>
          <button
            className="w-1/5 bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => setModalOpacity(false)}
          >
            No
          </button>
        </div>
      </div>
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
  );
}
