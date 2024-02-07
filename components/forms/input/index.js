export default function Input({ placeholder, value, onChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };
  return (
    <input
      placeholder={placeholder}
      className="bg-gray-200 w-96 py-3 px-6 rounded"
      value={value}
      onChange={handleChange}
    />
  );
}
