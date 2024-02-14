import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Input from "@/components/forms/input";
import { useEffect, useState } from "react";
import LocationItem from "@/components/search/location-item";

export default function Search() {
  const [locations, setLocations] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await fetch(`/api/locations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setLocations(data);
  };

  const handleSubmit = async () => {
    const response = await fetch(
      `/api/search-location?inputValue=${inputValue}`
    );
    const data = await response.json();
    setLocations(data);
  };

  return (
    <div className="w-full">
      <Header name="Search Page"></Header>
      <Content>
        <div className="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 flex flex-row space-x-2">
          <Input
            value={inputValue}
            formerlyonChange={(valueFromTheComponent) =>
              setInputValue(valueFromTheComponent)
            }
          ></Input>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded"
            type="button"
            onClick={handleSubmit}
          >
            S
          </button>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {locations.map((location) => (
            <LocationItem location={location}></LocationItem>
          ))}
        </div>
      </Content>
      <Footer pageName="Home" href="/"></Footer>
    </div>
  );
}
