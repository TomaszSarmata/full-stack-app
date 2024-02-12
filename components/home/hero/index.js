export default function Hero({ imgUrl, title, subtitle }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="w-full flex flex-col  items-center py-4 space-y-4 md:flex-row md:space-x-4">
        <div className="w-48 shadow-md rounded-lg">
          {" "}
          <img className="rounded-lg " src={imgUrl} alt="" />
        </div>
        <div className="w-full text-center md:text-start">
          <h1
            className={`
            text-6xl text-gray-700 sm:text-gray-500 md:text-purple-900 
            font-bold
           `}
          >
            {title}
          </h1>
          <p className="text-xl text-gray-700">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
