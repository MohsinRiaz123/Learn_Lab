import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/LandingPages/HomePage";
import AboutUS from "./Pages/LandingPages/AboutUS";
import ContactUs from "./Pages/LandingPages/ContactUs";
import LoginPage from "./Pages/LandingPages/LoginPage";
import StudentSignup from "./Pages/LandingPages/StudentSignup";
import InstructorSignup from "./Pages/LandingPages/InstructorSignup";
import ForgotPassword from "./Pages/LandingPages/ForgotPassword";
import StudentDashboardLayout from "./UI/StudentDashboardLayout";
import StudentDashboard from "./Pages/Student/Dashboard";
import MyProfile from "./Pages/Student/Profile";
import CourseDetail from "./Pages/Student/CourseDetailes";
import Learning from "./Pages/Student/LearningScreen";
import DashboardPage from "./Pages/Admin/DashboardPage";
import CoursesPage from "./Pages/Admin/CoursesPage";
import StudentsPage from "./Pages/Admin/StudentsPage";
import InstructorsPage from "./Pages/Admin/InstructorsPage";
import AnalyticsPage from "./Pages/Admin/AnalyticsPage";
import NotificationsPage from "./Pages/Admin/NotificationsPage";
import ReportsPage from "./Pages/Admin/ReportsPage";
import InstructorProfile from "./Pages/Admin/InstructorProfile";
import SettingsPage from "./Pages/Admin/SettingsPage";
import Reviews from "./Pages/Student/Reviews";
import QuizAttempts from "./Pages/Student/QuizAttempt";
import EnrolledCourses from "./Pages/Student/EnrolledCourses";
import Setting from "./Pages/Student/Setting";
import InstructorDashboardLayout from "./UI/InstructorDashboardLayout";
import InsDashboard from "./Pages/Instructor/Dashboard";
import InsMyProfile from "./Pages/Instructor/Profile";
import InsReviews from "./Pages/Instructor/Reviews";
import InsQuizAttempts from "./Pages/Instructor/QuizAttempt";
import InsEnrolledCourses from "./Pages/Instructor/EnrolledCourses";
import InsSetting from "./Pages/Instructor/Setting";
import CreateCourse from "./Pages/Instructor/CreateCourse";
import Dashboard from "./Pages/Industryexpert/Dashboard";
import ProjectDetails from "./Pages/Industryexpert/ProjectDetails"
import Profile from "./Pages/Industryexpert/Profile";
import Projects from "./Pages/Industryexpert/Projects";
import Messages from "./Pages/Industryexpert/Messages";
import Courses from "./Pages/Industryexpert/Courses";
import Feedback from "./Pages/Industryexpert/Feedback";
import Recommendations from "./Pages/Industryexpert/Recommendations";
import Settings from "./Pages/Industryexpert/Settings";
import "./App.css";
import IndustoryExpertLayout from "./UI/IndustoryExpertLayout";
import AdminLayout from "./UI/AdminLayout";

function App() {
  return (
    <Router>
      <div className="font-montserrat">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/studentSignup" element={<StudentSignup />} />
          <Route path="/instructorSignup" element={<InstructorSignup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* ---------------Student dashboard Routing ------------------------- */}

          <Route path="/student" element={<StudentDashboardLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="courses" element={<EnrolledCourses />} />
            <Route path="quizzes" element={<QuizAttempts />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="setting" element={<Setting />} />
            <Route path="course" element={<CourseDetail/>} />
            <Route path="learning" element={<Learning />} />
          </Route>

          {/* ---------------Instructor dashboard Routing ------------------------- */}

          <Route path="/instructor" element={<InstructorDashboardLayout />}>
            <Route index element={<InsDashboard />} />
            <Route path="profile" element={<InsMyProfile />} />
            <Route path="courses" element={<InsEnrolledCourses />} />
            <Route path="quizzes" element={<InsQuizAttempts />} />
            <Route path="reviews" element={<InsReviews />} />
            <Route path="setting" element={<InsSetting />} />
            <Route path="createCourse" element={<CreateCourse />} />
          </Route>

          {/* ---------------Industory Expert dashboard Routing ------------------------- */}

          <Route path="/industoryExpert" element={<IndustoryExpertLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
			Route path="/industryexpert/project/:id" element={<ProjectDetails />} />
            <Route path="projects" element={<Projects />} />
            <Route path="messages" element={<Messages />} />
            <Route path="courses" element={<Courses />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="recommendations" element={<Recommendations />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* ---------------Admin dashboard Routing ------------------------- */}

          <Route path="/Admin" element={<AdminLayout />}>
		  <Route path="/admin/instructor/:id" element={<InstructorProfile />} />
            <Route index element={<DashboardPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="students" element={<StudentsPage />} />
            <Route path="instructors" element={<InstructorsPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
