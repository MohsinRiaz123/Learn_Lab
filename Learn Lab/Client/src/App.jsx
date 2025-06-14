import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUS from "./Pages/AboutUS";
import ContactUs from "./Pages/ContactUs";
import LoginPage from "./Pages/LoginPage";
import StudentSignup from "./Pages/StudentSignup";
import InstructorSignup from "./Pages/InstructorSignup";
import ForgotPassword from "./Pages/ForgotPassword";
import StudentDashboardLayout from "./UI/StudentDashboardLayout";
import Dashboard from "./Pages/Student/Dashboard";
import MyProfile from "./Pages/Student/Profile";
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
import { Sidebar } from "./Components/sidebar"
import Dashboard from "./Pages/Dashboard"
import Profile from "./Pages/Profile"
import Projects from "./Pages/Projects"
import Messages from "./Pages/Messages"
import Courses from "./Pages/Courses"
import Feedback from "./Pages/Feedback"
import Recommendations from "./Pages/Recommendations"
import Settings from "./Pages/Settings"
import "./App.css"
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
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="courses" element={<EnrolledCourses />} />
            <Route path="quizzes" element={<QuizAttempts />} />
            <Route path="reviews" element={<Reviews/>} />
            <Route path="setting" element={<Setting/>} />
          
          </Route>

           {/* ---------------Instructor dashboard Routing ------------------------- */}

           <Route path="/instructor" element={<InstructorDashboardLayout />}>
            <Route index element={<InsDashboard/>} />
            <Route path="profile" element={<InsMyProfile />} />
            <Route path="courses" element={<InsEnrolledCourses />} />
            <Route path="quizzes" element={<InsQuizAttempts />} />
            <Route path="reviews" element={<InsReviews/>} />
            <Route path="setting" element={<InsSetting/>} />
            <Route path="createCourse" element={<CreateCourse/>} />
          
          </Route>

 <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mx-auto max-w-7xl">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
