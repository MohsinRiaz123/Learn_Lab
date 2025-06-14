import { MdEdit, MdCheckCircle } from "react-icons/md"

export function FeedbackList({ status }) {
  const getFeedback = (status) => {
    const allFeedback = [
      {
        id: 1,
        student: "Muhammad Ali",
        project: "E-commerce Website",
        course: "React Fundamentals",
        submittedDate: "2024-01-15",
        status: "pending",
      },
      {
        id: 2,
        student: "Fatima Khan",
        project: "Portfolio Website",
        course: "Web Development",
        submittedDate: "2024-01-14",
        status: "pending",
      },
      {
        id: 3,
        student: "Hassan Ahmed",
        project: "Weather App",
        course: "JavaScript Basics",
        submittedDate: "2024-01-10",
        status: "completed",
      },
    ]

    return allFeedback.filter((item) => item.status === status)
  }

  const feedback = getFeedback(status)

  return (
    <div className="space-y-4">
      {feedback.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{item.project}</h3>
              <p className="text-gray-600 mb-1">Student: {item.student}</p>
              <p className="text-gray-600 mb-1">Course: {item.course}</p>
              <p className="text-sm text-gray-500">Submitted: {item.submittedDate}</p>
            </div>
            <div className="flex gap-2">
              {status === "pending" ? (
                <button className="flex items-center gap-1 px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  <MdEdit className="h-4 w-4" />
                  Provide Feedback
                </button>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-md">
                  <MdCheckCircle className="h-4 w-4" />
                  Completed
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
