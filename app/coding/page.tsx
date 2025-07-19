import { SiHackerrank, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function CodingPage() {
  const platforms = [
    {
      name: "HackerRank",
      icon: <SiHackerrank className="text-green-500 text-4xl" />,
      url: "https://www.hackerrank.com/profile/divyait2004",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-yellow-500 text-4xl" />,
      url: "https://leetcode.com/u/IT_Divya/",
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks className="text-green-700 text-4xl" />,
      url: "https://www.geeksforgeeks.org/user/rd9635rwu/",
    },
  ];

  return (
    <section className="section">
      <h1 className="text-4xl font-bold mb-10 text-center">💻 Coding Profiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {platforms.map((platform, index) => (
          <div key={index} className="card text-center p-6 hover:shadow-xl transition-all duration-300">
            <div className="mb-4 flex justify-center">{platform.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{platform.name}</h2>
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-5 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
            >
              Click Me
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
