import { CheckCircle } from "lucide-react"

export default function CourseSection({
  type,
  title,
  subtitle,
  leftTitle,
  rightTitle,
  content,
  list = [],
  left = [],
  right = [],
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      {title && <h5 className="text-[14px] font-medium mb-4">{subtitle}</h5>}

      {type === "content" && <p className="leading-7">{content}</p>}

      {type === "list" && (
        <ul className="list-disc ml-5 space-y-2">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}


       {type === "twoColumnChecklist" && (
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LEFT */}
          <div>
            {leftTitle && (
              <h3 className="font-semibold mb-4 text-lg">
                {leftTitle}
              </h3>
            )}
            <ul className="space-y-3">
              {left.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            {rightTitle && (
              <h3 className="font-semibold mb-4 text-lg">
                {rightTitle}
              </h3>
            )}
            <ul className="space-y-3">
              {right.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  )
}



