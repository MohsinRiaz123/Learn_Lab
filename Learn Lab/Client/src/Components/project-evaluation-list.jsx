import { MdEdit, MdVisibility, MdCheckCircle } from "react-icons/md"

export function ProjectEvaluationList({ status }) {
  const getProjects = (status) => {
    const allProjects = [
      {
        id: 1,
        title: "E-commerce Website with React",
        learner: "Muhammad Ali",
        course: "React Fundamentals",
        submittedDate: "2024-01-15",
        priority: "High",
        status: "pending",
      },
      {
        id: 2,
        title: "Portfolio Website",
        learner: "Fatima Khan",
        course: "Web Development",
        submittedDate: "2024-01-14",
        priority: "Medium",
        status: "pending",
      },
      {
        id: 3,
        title: "Task Management App",
        learner: "Hassan Ahmed",
        course: "JavaScript Basics",
        submittedDate: "2024-01-13",
        priority: "Low",
        status: "inProgress",
      },
      {
        id: 4,
        title: "Weather App",
        learner: "Ayesha Malik",
        course: "React Fundamentals",
        submittedDate: "2024-01-10",
        priority: "High",
        status: "completed",
      },
    ]

    return allProjects.filter((project) => project.status === status)
  }

  const projects = getProjects(status)

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(project.priority)}`}>
                  {project.priority}
                </span>
              </div>
              <p className="text-gray-600 mb-1">Student: {project.learner}</p>
              <p className="text-gray-600 mb-1">Course: {project.course}</p>
              <p className="text-sm text-gray-500">Submitted: {project.submittedDate}</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <MdVisibility className="h-4 w-4" />
                View
              </button>
              {status === "pending" && (
                <button className="flex items-center gap-1 px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  <MdEdit className="h-4 w-4" />
                  Start Review
                </button>
              )}
              {status === "completed" && (
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
