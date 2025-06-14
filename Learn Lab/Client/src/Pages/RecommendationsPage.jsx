import { useState } from "react"
import { CourseRecommendationForm } from "../Components/course-recommendation-form"
import { RecommendationsList } from "../Components/recommendations-list"

export default function RecommendationsPage() {
  const [activeTab, setActiveTab] = useState("recommendations")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Course Recommendations</h1>
        <p className="text-gray-600">Suggest improvements to courses based on industry trends</p>
      </div>

      <div>
        <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500">
          <button
            onClick={() => setActiveTab("recommendations")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
              activeTab === "recommendations"
                ? "bg-white text-gray-950 shadow-sm"
                : "hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            My Recommendations
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
              activeTab === "new" ? "bg-white text-gray-950 shadow-sm" : "hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            New Recommendation
          </button>
        </div>

        <div className="mt-4">
          {activeTab === "recommendations" && <RecommendationsList />}
          {activeTab === "new" && (
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Create New Recommendation</h2>
                <p className="text-gray-600">
                  Suggest improvements or changes to course content based on your industry expertise
                </p>
              </div>
              <div className="p-6">
                <CourseRecommendationForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
