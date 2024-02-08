import { useEffect, useState } from "react";
import LocationItem from "./location-item";
import LikesProvider from "@/context/likes";

export default function LocationsGrid() {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    setIsLoading(true);
    const res = await fetch(`/api/locations`);
    const data = await res.json();
    setLocations(data);
    setIsLoading(false);
  };

  return (
    <LikesProvider>
      {isLoading ? (
        <div>Loading locations...</div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-4 mb-8">
          {locations.map((location, index) => {
            return (
              <LocationItem location={location} key={index}></LocationItem>
            );
          })}
        </div>
      )}
    </LikesProvider>
  );
}
