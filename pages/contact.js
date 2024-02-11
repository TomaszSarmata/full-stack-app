import Input from "@/components/forms/input";
import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import { useState } from "react";
import { useEffect } from "react";
import ListOfMessages from "@/components/contact/list-of-messages";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    // if (!name) {
    //   //message here
    //   return;
    // }
    // if (!email) {
    //   //message here
    //   return;
    // }
    // if (!message) {
    //   //message here
    //   return;
    // }

    const response = await fetch(
      `api/contact?name=${name}&email=${email}&message=${message}`
    );

    if (response.status === 200) {
      const data = await response.json();

      setShowSuccess(data.message);

      setName("");
      setEmail("");
      setMessage("");
      setModal(true);
      setTimeout(() => {
        setShowSuccess(false);
        setModal(false);
        // getMessages();
      }, 5000);
    } else {
      const data = await response.json();
      setShowError(data.message);
    }
  };

  return (
    <div className="w-full relative">
      <Header name="Contact"></Header>

      <Content>
        <form className="flex flex-col space-y-3 items-center mb-10">
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
            className="bg-gray-200 w-96 py-3 px-6 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 py-3 px-6 text-white w-96 rounded"
            onClick={handleSubmit}
            type="button"
          >
            Submit
          </button>

          {showSuccess ? (
            <p className="text-green-500 w-96">{showSuccess}</p>
          ) : (
            <p className="text-red-500 w-96">{showError}</p>
          )}
        </form>

        <ListOfMessages></ListOfMessages>
      </Content>

      <Footer pageName="Home" href="/"></Footer>
      {modal ? (
        <div className="w-full h-screen bg-white bg-opacity-50 absolute top-0 left-0 flex items-center justify-center">
          <div className="w-96 text-gray-700 bg-gray-200 py-10 px-16">
            <p className="text-xl font-semibold">Great Stuff!</p>
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
