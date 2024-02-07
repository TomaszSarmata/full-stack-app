import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";

export default function Contact() {
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
            value=""
            onChange={() => {}}
          />
          <input
            placeholder="Email"
            type="text"
            name="email"
            className="bg-gray-200 w-96 py-3 px-6 rounded"
            value=""
            onChange={() => {}}
          />
          <textarea
            placeholder="Message"
            name=""
            id=""
            className="bg-gray-200 w-96 py-3 px-6 rounded"
            value=""
            onChange={() => {}}
          ></textarea>
          <button
            className="bg-blue-500 py-3 px-6 text-white w-96 rounded"
            onClick={() => {}}
            type="button"
          >
            Submit
          </button>
        </form>
      </Content>

      <Footer pageName="Home" href="/"></Footer>
    </div>
  );
}
