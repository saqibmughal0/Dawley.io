import CourseHero from "./CourseHero";
import CourseSection from "./CourseSection";
import CourseSidebar from "./CourseSidebar";
import CourseSyllabus from "./CourseSyllabus";
import CourseCTA from "./CourseCTA";
import CourseTestimonials from "./CourseTestimonials";

export default function CourseDetailLayout({ course }) {
  return (
    <section className="bg-gray-100">
      <CourseHero course={course} />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          {course.sections?.map((section, idx) => (
            <CourseSection key={idx} {...section} />
          ))}

          {course.syllabus && (
            <CourseSyllabus syllabus={course.syllabus} />
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <CourseSidebar course={course} />
      </div>
      <CourseTestimonials />
      <CourseCTA />
    </section>
  )
}
