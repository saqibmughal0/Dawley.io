import Image from "next/image"

export default function CourseHero({ course }) {
  return (
    <div className="relative h-[280px] md:h-[380px] w-full">
      <Image
        src={course?.heroImage || "/images/default-course.webp"}
        alt={course?.title || "Course"}
        fill
        priority
        className="object-cover"
      />
    </div>
  )
}
