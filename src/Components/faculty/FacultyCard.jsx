"use client";

import Image from "next/image";

export default function FacultyCard({
  name,
  role,
  description,
  image,
  skills = [],
}) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition">
      
      {/* IMAGE */}
      <div className="relative w-full h-[260px] rounded-xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <h4 className="text-xl font-bold text-black">{name}</h4>
      <p className="text-sm font-medium text-gray-500 mb-2">{role}</p>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* SKILLS */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full border border-gray-300 text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

