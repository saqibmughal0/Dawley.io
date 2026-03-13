"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

export default function CourseSidebar({ course }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow p-6 max-h-[520px] sticky top-24 space-y-4">

      {/* Course Image */}
      <div className="relative h-40 rounded-lg overflow-hidden">
        <Image
          src={course?.sidebarImage}
          alt={course?.title || "Course"}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Price Heading */}
      <h4 className="text-[15px] leading-5 mt-2 font-semibold text-center text-gray-500">
        {course.subheading}
      </h4>
      <h4 className="text-1xl leading-5 text-center text-gray-500">
        {course.price?.heading}
      </h4>

      {/* Prices */}
      <div className="flex justify-center items-center gap-3">
        <span className="text-gray-400 line-through text-lg">
          {course.price?.original}
        </span>

        <span className="text-3xl font-bold text-red-600">
          {course.price?.discounted}
        </span>
      </div>

      {/* Duration */}
      <p className="text-sm text-center text-gray-600">
        ⏱ Duration: <strong>{course.price?.duration}</strong>
      </p>

      {/* Buttons */}
      {/* Fixed: Link wraps button, not the other way */}
      <Link href="/enrollnow">
        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition mt-3">
          Enroll Now
        </button>
      </Link>

      {/* Add To Cart button */}
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: course.id,
              name: course.title,
              price: course.price,
              image: course.sidebarImage, // <-- store image here
            })
          )
        }
        className="w-full border py-3 rounded-lg hover:bg-gray-100 transition mt-2"
      >
        Add To Cart
      </button>

    </div>
  );
}
