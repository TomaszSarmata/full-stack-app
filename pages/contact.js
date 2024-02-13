import Input from "@/components/forms/input";
import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import { useState, useEffect } from "react";

import ListOfMessages from "@/components/contact/list-of-messages";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [modal, setModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/get-messages`);
    const data = await response.json();
    const { messages } = data;
    setMessages(messages);
    setIsLoading(false);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    let payload = {
      name: name,
      email: email,
      message: message,
    };

    const response = await fetch(`api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // const response = await fetch(
    //   `api/contact?name=${name}&email=${email}&message=${message}`
    // );

    if (response.status === 200) {
      const data = await response.json();
      setShowError(false);

      setShowSuccess(data.message);

      setName("");
      setEmail("");
      setMessage("");
      setModal(true);
      setTimeout(() => {
        setShowSuccess(false);
        setModal(false);
        getMessages();
      }, 5000);
    } else {
      const data = await response.json();
      setShowError(data.message);
    }
  };

  return (
    <div className="w-full relative">
      <Header name="Contact Page"></Header>

      <Content>
        <form className="flex flex-col space-y-3 items-center mb-10 w-full sm:w-96 px-4 sm:mx-auto ">
          <Input
            placeholder="Name"
            value={name}
            formerlyonChange={(anyname) => setName(anyname)}
          ></Input>
          <Input
            placeholder="Email"
            value={email}
            formerlyonChange={(IamATemplate) => setEmail(IamATemplate)} //go to input and read the comments to see how the program runs
          ></Input>

          <textarea
            placeholder="Message"
            name=""
            id=""
            className="bg-gray-200 w-full py-3 px-6 rounded shadow-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 py-3 px-6 text-white w-full rounded shadow-md"
            onClick={handleSubmit}
            type="button"
          >
            Submit
          </button>

          {showSuccess ? (
            <p className="text-green-500 w-full">{showSuccess}</p>
          ) : (
            <p className="text-red-500 w-full">{showError}</p>
          )}
        </form>

        <ListOfMessages
          messages={messages}
          isLoading={isLoading}
        ></ListOfMessages>
      </Content>

      <Footer pageName="Home" href="/"></Footer>
      {modal ? (
        <div className="w-full h-screen bg-white bg-opacity-80 absolute top-0 left-0 flex items-center justify-center">
          <div className="w-96 text-gray-700 bg-gray-300 py-10 px-16 rounded-lg shadow-md">
            <p className="text-xl font-semibold border-b-red-300 border-b-2">
              Great Stuff!
            </p>
            <p className="italic">
              Your message was successully passed on to one of our team members
              and will be delt with imminently.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
