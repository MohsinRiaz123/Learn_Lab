import { useState } from "react"
import { ProjectEvaluationList } from "../Components/project-evaluation-list"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("pending")

  const tabs = [
    { id: "pending", label: "Pending (12)" },
    { id: "inProgress", label: "In Progress (5)" },
    { id: "completed", label: "Completed (42)" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Project Evaluations</h1>
        <p className="text-gray-600">Review and provide feedback on learner projects</p>
      </div>

      <div>
        <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
                activeTab === tab.id ? "bg-white text-gray-950 shadow-sm" : "hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <ProjectEvaluationList status={activeTab} />
        </div>
      </div>
    </div>
  )
}
