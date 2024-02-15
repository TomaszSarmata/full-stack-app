export default function LocationItem({ location }) {
  console.log(location, "here location");
  return (
    <div className="w-full h-full relative text-center text-white">
      <img
        src={location.img_url}
        alt="location"
        className="brightness-75 rounded-md shadow-md w-full h-full"
      />
      <p className="w-full text-3xl font-bold text-shadow small-screen-text absolute top-1/2 left-1/2 translate-x-[-50%]">
        {location.title}
      </p>
      <p className="w-full text-sm text-shadow absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[180%]">
        <span>visited date: </span>
        {location.visited_date}
      </p>
    </div>
  );
}
