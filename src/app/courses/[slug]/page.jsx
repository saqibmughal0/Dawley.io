"use client";

import CourseDetailLayout from "@/components/course/CourseDetailLayout";
import { courses } from "@/data/courses";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams(); // ✅ Get dynamic route params
  const slug = params.slug;    // slug from URL

  console.log("Slug (client):", slug);

  const course = courses[slug];

  if (!course) {
    return <div className="p-10 text-center">Course Not Found</div>;
  }

  return <CourseDetailLayout course={course} />;
}
