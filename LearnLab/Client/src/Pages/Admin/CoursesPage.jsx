import { CourseApprovalList } from "../components/CourseApprovalList"

export function CoursesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Course Management</h1>
        <p className="text-gray-600">Manage and approve courses</p>
      </div>

      <CourseApprovalList />
    </div>
  )
}
