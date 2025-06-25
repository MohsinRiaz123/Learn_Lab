import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BuySubscriptionPage from "./BuySubscriptionPage";

const LearningScreen = () => {
  const videoRef = useRef(null);
  const location = useLocation(); // Detect route changes

  const [videoCompleted, setVideoCompleted] = useState(false);
  const [watchedTime, setWatchedTime] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const COURSE_ID = "course123";

  const [courseDetails, setCourseDetails] = useState({
    id: COURSE_ID,
    title: "Effective Team Communication",
    instructor: "David Miller",
    tags: ["Communication", "Teamwork", "Soft Skills"],
    description:
      "This course helps students develop practical communication strategies to work effectively within a team environment.",
    VIDEO_PROGRESS_KEY: `video_progress_${COURSE_ID}`,
    STATUS_KEY: `course_status_${COURSE_ID}`,
    courseStatus: "incomplete",
    score: 0,
  });

  const questions = [
    {
      id: 1,
      question: "What is the main purpose of this course?",
      options: [
        "Design UI",
        "Solve team conflicts",
        "Learn Laravel",
        "Test applications",
      ],
      correct: "Solve team conflicts",
    },
    {
      id: 2,
      question: "Who is the course instructor?",
      options: ["David Miller", "John Doe", "Jane Smith", "Alan Walker"],
      correct: "David Miller",
    },
  ];

  // Save video time to localStorage
  const saveVideoProgress = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      localStorage.setItem(courseDetails.VIDEO_PROGRESS_KEY, time);
    }
  };

  useEffect(() => {
    const savedTime = localStorage.getItem(courseDetails.VIDEO_PROGRESS_KEY);
    const savedStatus = localStorage.getItem(courseDetails.STATUS_KEY);

    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = parseFloat(savedTime);
      setWatchedTime(parseFloat(savedTime));
    }

    if (savedStatus) {
      setCourseDetails((prev) => ({
        ...prev,
        courseStatus: savedStatus,
      }));
    }

    const interval = setInterval(() => {
      if (videoRef.current) {
        setWatchedTime(videoRef.current.currentTime);
      }
    }, 1000);

    const handleBeforeUnload = () => saveVideoProgress();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        saveVideoProgress();
      }
    };

    // Event listeners for save triggers
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // ✅ Save before unmount or route change
      saveVideoProgress();
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [location.pathname]); // Runs when route changes

  const handlePause = () => {
    saveVideoProgress();
  };

  const handleVideoEnd = () => {
    setVideoCompleted(true);
    localStorage.removeItem(courseDetails.VIDEO_PROGRESS_KEY);
  };

  const handleOptionChange = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) correctCount++;
    });

    const percentage = (correctCount / questions.length) * 100;
    const newStatus = percentage >= 70 ? "completed" : "incomplete";

    setCourseDetails((prev) => {
      const updated = {
        ...prev,
        score: correctCount,
        courseStatus: newStatus,
      };
      localStorage.setItem(prev.STATUS_KEY, newStatus);
      return updated;
    });

    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <BuySubscriptionPage />

      {/* Course Info */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{courseDetails.title}</h1>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">Instructor:</span>{" "}
          {courseDetails.instructor}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {courseDetails.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 mb-1">{courseDetails.description}</p>
        <p className="text-sm mt-2">
          <span className="font-medium">Course Status:</span>{" "}
          <span className="capitalize underline">
            {courseDetails.courseStatus}
          </span>
        </p>
      </div>

      {/* Quiz Section */}
      {videoCompleted && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Quick Quiz</h3>
          {questions.map((q) => (
            <div key={q.id} className="mb-4">
              <p className="font-medium mb-2">{q.question}</p>
              <div className="space-y-1">
                {q.options.map((option) => (
                  <label key={option} className="block">
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={option}
                      onChange={() => handleOptionChange(q.id, option)}
                      disabled={submitted}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}

          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-4 text-green-600 font-semibold">
              You scored {courseDetails.score} out of {questions.length} (
              {Math.floor((courseDetails.score / questions.length) * 100)}%){" "}
              <br />
              Updated Status:{" "}
              <span className="capitalize underline">
                {courseDetails.courseStatus}
              </span>
            </div>
          )}
        </div>
      )}
      <p className="text-md text-red-500 mt-1">
        * Please pause the video before changing the webpage to ensure progress
        is saved.
      </p>
      {/* Video Section */}
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <video
          ref={videoRef}
          controls
          onEnded={handleVideoEnd}
          onPause={handlePause}
          className="rounded-lg w-full shadow"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Watched Time */}
      <p className="text-sm text-gray-500 mt-2">
        Watched: {Math.floor(watchedTime)} seconds
      </p>
    </div>
  );
};

export default LearningScreen;
