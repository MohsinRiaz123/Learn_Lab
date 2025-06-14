import { useState } from "react"
import { FeedbackList } from "../Components/feedback-list"

export default function Feedback() {
  const [activeTab, setActiveTab] = useState("pending")

  const tabs = [
    { id: "pending", label: "Pending Feedback (12)" },
    { id: "completed", label: "Completed (28)" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learner Feedback</h1>
        <p className="text-gray-600">Provide feedback to learners on their projects and assignments</p>
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
          <FeedbackList status={activeTab} />
        </div>
      </div>
    </div>
  )
}
