export default function Hero({ imgUrl, title, subtitle }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="w-full flex flex-row space-x-3 mt-8">
        <div className="w-2/12">
          <img className="rounded-lg " src={imgUrl} alt="" />
        </div>
        <div className="w-10/12">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl text-gray-700">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
