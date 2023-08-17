const topics = [
  "React",
  "Next.js",
  "Git",
  "Github",
  "JavaScript",
  "HTML",
  "Tailwind/CSS",
];

export default function Topics() {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-2xl font-medium">Topics Covered</h3>
      <ul className=" list-disc flex flex-col mb-4 space-y-2">
        {topics.map((topic, index) => {
          return <li key={index}>{topic}</li>;
        })}
      </ul>
    </div>
  );
}
