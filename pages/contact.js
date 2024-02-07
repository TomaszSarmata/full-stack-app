import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = async () => {
    const response = await fetch(
      `api/messages?name=${name}&email=${email}&message=${message}`
    );

    if (response.status === 200) {
      const data = await response.json();

      setShowSuccess(data.message);
      console.log("success", data.message);

      setName("");
      setEmail("");
      setMessage("");
    } else {
      const data = await response.json();
      setShowError(data.message);
      console.log("error", data.message);
    }
  };

  return (
    <div className="w-full">
      <Header name="Contact"></Header>

      <Content>
        <form action="" className="flex flex-col space-y-3">
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="bg-gray-200 w-96 py-3 px-6 rounded"
            value={name}
            onChange={handleName}
          />
          <input
            placeholder="Email"
            type="text"
            name="email"
            className="bg-gray-200 w-96 py-3 px-6 rounded"
            value={email}
            onChange={handleEmail}
          />
          <textarea
            placeholder="Message"
            name=""
            id=""
            className="bg-gray-200 w-96 py-3 px-6 rounded"
            value={message}
            onChange={handleMessage}
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
      </Content>

      <Footer pageName="Home" href="/"></Footer>
    </div>
  );
}
