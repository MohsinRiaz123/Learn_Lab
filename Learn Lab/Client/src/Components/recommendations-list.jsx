import { MdEdit, MdVisibility } from "react-icons/md"

export function RecommendationsList() {
  const recommendations = [
    {
      id: 1,
      title: "Add Modern CSS Frameworks Section",
      course: "Web Development Fundamentals",
      priority: "High",
      status: "Pending Review",
      submittedDate: "2024-01-15",
      description:
        "Include comprehensive coverage of modern CSS frameworks like Tailwind CSS and Bootstrap to keep students updated with current industry practices.",
    },
    {
      id: 2,
      title: "Include React Hooks Best Practices",
      course: "React Fundamentals",
      priority: "Medium",
      status: "Approved",
      submittedDate: "2024-01-10",
      description:
        "Add detailed section on React Hooks patterns, custom hooks, and performance optimization techniques.",
    },
    {
      id: 3,
      title: "Database Security Module",
      course: "Database Fundamentals",
      priority: "High",
      status: "Under Review",
      submittedDate: "2024-01-08",
      description:
        "Include comprehensive database security practices, SQL injection prevention, and data encryption methods.",
    },
    {
      id: 4,
      title: "API Testing with Postman",
      course: "Web Development Fundamentals",
      priority: "Low",
      status: "Rejected",
      submittedDate: "2024-01-05",
      description: "Add practical exercises for API testing using Postman and automated testing tools.",
    },
  ]

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

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800"
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800"
      case "Under Review":
        return "bg-blue-100 text-blue-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-4">
      {recommendations.map((rec) => (
        <div key={rec.id} className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg">{rec.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(rec.priority)}`}>
                  {rec.priority}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(rec.status)}`}>
                  {rec.status}
                </span>
              </div>
              <p className="text-gray-600 mb-2">Course: {rec.course}</p>
              <p className="text-sm text-gray-700 mb-2">{rec.description}</p>
              <p className="text-sm text-gray-500">Submitted: {rec.submittedDate}</p>
            </div>
            <div className="flex gap-2 ml-4">
              <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <MdVisibility className="h-4 w-4" />
                View
              </button>
              {rec.status !== "Approved" && rec.status !== "Rejected" && (
                <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <MdEdit className="h-4 w-4" />
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {recommendations.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No recommendations found.</p>
        </div>
      )}
    </div>
  )
}
