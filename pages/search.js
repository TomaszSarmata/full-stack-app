import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Input from "@/components/forms/input";
import { useEffect, useState } from "react";
export default function Search() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await fetch(`/api/locations`);
    const data = await response.json();
    setLocations(data);
  };

  return (
    <div className="w-full">
      <Header name="Search Page"></Header>
      <Content>
        <div className="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 flex flex-row space-x-2">
          <Input></Input>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded"
            type="button"
          >
            S
          </button>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {locations.map((location) => (
            <div className="w-full h-full relative text-white">
              <img src={location.img_url} alt="location" />
              <p className="text-2xl bold absolute top-1/2 left-1/2 translate-x-[-50%]">
                {location.title}
              </p>
              <p className="text-xl bold absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[90%]">
                {location.visited_date}
              </p>
            </div>
          ))}
        </div>
      </Content>
      <Footer pageName="Home" href="/"></Footer>
    </div>
  );
}
