export default function handler(req, res) {
  const locations = [
    {
      id: "manchester",
      title: "Manchester",
      visitedDate: "last week",
      imgUrl: "/images/manchester.png",
    },
    {
      id: "singapore",
      title: "Singapore",
      visitedDate: "last year",
      imgUrl: "/images/singapore.png",
    },
    {
      id: "san-francisco",
      title: "San Francisco",
      visitedDate: "Jan 2022",
      imgUrl: "/images/san-francisco.png",
    },
  ];
  res.json(locations);
}
