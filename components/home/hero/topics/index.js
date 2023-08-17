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
    <div>
      <h2 className="text-2xl font-bold">Topics Covered</h2>
      <ul className="my-5 list-disc">
        {topics.map((topic, index) => {
          return <li key={index}>{topic}</li>;
        })}
      </ul>
    </div>
  );
}
