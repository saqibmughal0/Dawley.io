"use client";
import React, { useState } from "react";

const videos = [
  {
    id: "VIDEO_ID_1",
    title: "Deepseek vs ChatGPT: Not Rivals!",
  },
  {
    id: "VIDEO_ID_2",
    title: "Cyber Security & AI Training",
  },
  {
    id: "VIDEO_ID_3",
    title: "Short Courses at Dawley Institute",
  },
  {
    id: "VIDEO_ID_4",
    title: "Pakistan Defence Day",
  },
  {
    id: "VIDEO_ID_5",
    title: "Skill to future banao!",
  },
  {
    id: "VIDEO_ID_6",
    title: "Happy Independence Day",
  },
];

export default function Vlogs() {
  const [activeVideo, setActiveVideo] = useState(videos[0].id);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Overview",
      content: (
        <>
          <p className="font-semibold mb-2">
            Deepseek vs ChatGPT – Which One Should You Use? 🤔
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>What is Deepseek & best use cases</li>
            <li>What is ChatGPT & where it excels</li>
            <li>Which AI tool is right for you</li>
          </ul>
        </>
      ),
    },
    {
      title: "Highlights",
      content: (
        <ul className="list-disc ml-5 space-y-1">
          <li>Side-by-side AI comparison</li>
          <li>Real-world business examples</li>
          <li>Best AI choice for startups</li>
        </ul>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          <p>📞 Contact Dawley: <strong>+971 588859810</strong></p>
          <p>🌐 Website: <strong>www.dawleybiz.com</strong></p>
        </>
      ),
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Latest Vlogs
      </h2>

      {/* Video + Playlist */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Video */}
        <div className="lg:col-span-2">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow">
            <iframe
              key={activeVideo}
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Playlist */}
        <div className="border rounded-lg p-4 max-h-[400px] overflow-y-auto">
          <h3 className="font-semibold mb-3">
            Playlist <span className="text-sm text-gray-500">({videos.length} Videos)</span>
          </h3>

          <div className="space-y-3">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setActiveVideo(video.id)}
                className={`flex items-center gap-3 p-2 rounded cursor-pointer transition
                  ${
                    activeVideo === video.id
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-24 rounded"
                />
                <p className="text-sm font-medium line-clamp-2">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10">
        <div className="flex flex-wrap gap-3 border-b mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition
                ${
                  activeTab === index
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="text-sm text-gray-700 space-y-2">
          {tabs[activeTab].content}
        </div>
      </div>
    </section>
  );
}
