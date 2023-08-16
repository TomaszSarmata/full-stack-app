export default function Header({ name }) {
  return (
    <div className="bg-blue-100 w-full max-w-6xl mx-auto py-4 px-4">
      <h1 className="text-4xl font-bold">{name}</h1>
    </div>
  );
}
