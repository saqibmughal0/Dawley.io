import CourseDetailLayout from "@/components/course/CourseDetailLayout"
import { courses } from "@/data/courses"



export default function CoursePage({ params }) {
  const course = courses[params.slug]

  if (!course) {
    return <div className="p-10">Course Not Found</div>
  }

  return <CourseDetailLayout course={courses} />
}
