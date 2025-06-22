import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaClock,
  FaUserGraduate,
  FaClipboardList,
  FaComment,
  FaStar,
} from "react-icons/fa";

import itc from "../../assets/Images/ITC.png";
import oop from "../../assets/Images/oop.png";
import pf from "../../assets/Images/pf.png";

const tabs = ["Publish Courses", "Pending Courses"];

const publishCourses = [
  {
    id: 1,
    title: "Intro to Computer Science",
    category: "Computer Science",
    image: itc,
    tags: ["Beginner", "Theory"],
    author: "Alice",
    rating: 4.6,
    complete: 20,
    stats: { lessons: 15, time: "8h 30m", comments: 18 },
  },
  {
    id: 2,
    title: "Object-Oriented Programming",
    category: "Programming",
    image: oop,
    tags: ["Intermediate", "Java"],
    author: "Bob",
    rating: 4.8,
    complete: 60,
    stats: { lessons: 25, time: "16h 15m", comments: 32 },
  },
];

const pendingCourses = [
  {
    id: 1,
    title: "The Complete Graphic Design for Beginners",
    category: "Design",
    image: oop,
    tags: ["Beginner", "Crush Course"],
    author: "Wilson",
    stats: { lessons: 60, time: "70h 45m", comments: 202 },
  },
  {
    id: 2,
    title: "Learning JavaScript With Imagination",
    category: "Data Science",
    image: pf,
    tags: ["Marketing", "Pro Expert"],
    author: "Warren",
    stats: { lessons: 8, time: "18h 20m", comments: 66 },
  },
  {
    id: 3,
    title: "Advanced JavaScript",
    category: "Development",
    image: oop,
    tags: ["Expert", "Laravel Pro"],
    author: "David Millar",
    stats: { lessons: 5, time: "11h 20m", comments: 22 },
  },
];

const CreateCourse = () => {
  const [activeTab, setActiveTab] = useState("Publish Courses");
  const navigate = useNavigate();

  const getCourses = () => {
    switch (activeTab) {
      case "Publish Courses":
      default:
        return publishCourses;
      case "Pending Courses":
        return pendingCourses;
    }
  };

  const courses = getCourses();

  return (
    <div className="p-6 bg-white rounded-lg shadow w-[70%] mx-auto">
      <button
        className="px-6 py-2 rounded-xl bg-purple hover:bg-blue  text-lg text-white font-semibold flex items-center "
        onClick={() => navigate("/")}
      >
        <span className="text-2xl pr-2">+</span> Add New Course
      </button>
      <h2 className="text-xl font-bold mb-4 mt-8">My Courses</h2>

      {/* Tabs */}
      <div className="flex space-x-6 mb-6 text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-4 border-purple text-purple"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <span className="inline-block bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full mb-2">
                {course.category}
              </span>
              <h3 className="font-semibold text-md mb-2">{course.title}</h3>

              {/* Progress */}
              {activeTab !== "Pending Courses" && (
                <>
                  {/* Author & Reviews */}
                  <div className="flex items-center text-sm text-gray-600 gap-1">
                    <FaUserGraduate className="text-gray-500" />
                    <span>{course.author}</span>
                    <FaStar className="ml-4 text-yellow-500" />
                    <span>({course.rating} Reviews)</span>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">COMPLETE</div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-1 mb-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${course.complete}%` }}
                    ></div>
                  </div>
                </>
              )}

              {/* Stats */}
              <div className="flex justify-between text-sm text-gray-600 mt-2 border-t pt-3">
                <div className="flex items-center gap-1">
                  <FaClipboardList /> {course.stats.lessons}
                </div>
                <div className="flex items-center gap-1">
                  <FaClock /> {course.stats.time}
                </div>
                <div className="flex items-center gap-1">
                  <FaComment /> {course.stats.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateCourse;
