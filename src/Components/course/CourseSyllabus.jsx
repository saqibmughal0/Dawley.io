import { CheckCircle } from "lucide-react";

export default function CourseSyllabus({ syllabus = [] }) {
  if (!syllabus.length) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-6">Course Outline (6 Weeks)</h2>

      {syllabus.map((week, i) => {
        const mid = Math.ceil(week.topics.length / 2);
        const leftTopics = week.topics.slice(0, mid);
        const rightTopics = week.topics.slice(mid);

        return (
          <div key={i} className="mb-6">
            {/* Week Heading */}
            <h4 className="font-semibold text-lg mb-3">
              {week.week}
            </h4>

            {/* Two Column Topics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-2">
                {leftTopics.map((t, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-green-500"><CheckCircle className="w-5 h-5 text-blue-600 mt-1" /></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {rightTopics.map((t, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-green-500"><CheckCircle className="w-5 h-5 text-blue-600 mt-1" /></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
