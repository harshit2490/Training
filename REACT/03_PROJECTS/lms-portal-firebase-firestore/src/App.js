import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
// SIGNUP 
// import SignupAdmin from "./Registry/SIGNUP/SignupAdmin";
// import SignupTeacher from "./Registry/SIGNUP/SignupTeacher";
import SignupStudent from "./Registry/SIGNUP/SignupStudent";
// LOGIN
import LoginAdmin from "./Registry/LOGIN/LoginAdmin";
import LoginTeacher from "./Registry/LOGIN/LoginTeacher";
import LoginStudent from "./Registry/LOGIN/LoginStudent";
// RESET
import ResetAdmin from "./Registry/RESET/ResetAdmin";
import ResetTeacher from "./Registry/RESET/ResetTeacher";
import ResetStudent from "./Registry/RESET/ResetStudent";
// PRIVATE ROUTES
import PrivateRoute from "./Registry/PrivateRoute";
import UpdateProfile from "./Registry/UpdateProfile";
// DASHBOARD
import MainDashboard from "./Components/MainDashboard";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import TeacherDashboard from "./Components/Teacher/TeacherDashboard";
import StudentDashboard from "./Components/Student/StudentDashboard";
// LANDING PAGE
import Home from "./HomePage/pages/Home";
import Courses from "./HomePage/pages/Courses";
import About from "./HomePage/pages/About";
import Contact from "./HomePage/pages/Contact";
import SignupTeacher from "./Registry/SIGNUP/SignupTeacher";

function App() {
  return (
    <div className="bg-color">
      <Router>
        <AuthProvider>
          <Routes>
            {/* LANDING PAGE /> */}
            <Route path='/home' exact element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />

            {/* SIGNUP */}
            <Route path="/signup-student" element={<SignupStudent />} />
            <Route path="/signup-teacher" element={<SignupTeacher />} />

            {/* LOGIN */}
            <Route path="/login-admin" element={<LoginAdmin />} />
            <Route path="/login-teacher" element={<LoginTeacher />} />
            <Route path="/login-student" element={<LoginStudent />} />

            {/* RESET /> */}
            <Route path="/reset-admin" element={<ResetAdmin />} />
            <Route path="/reset-teacher" element={<ResetTeacher />} />
            <Route path="/reset-student" element={<ResetStudent />} />

            {/* PRIVATE ROUTES /> */}
            <Route path="/" element={
              <PrivateRoute>  <MainDashboard />  </PrivateRoute>} />
            <Route path="/update-profile" element={
              <PrivateRoute>  <UpdateProfile />  </PrivateRoute>} />

            {/* DASHBOARD /> */}
            <Route path="/admin-dashboard" element={
              <PrivateRoute>  <AdminDashboard />  </PrivateRoute>} />
            <Route path="/teacher-dashboard" element={
              <PrivateRoute>  <TeacherDashboard /> </PrivateRoute>} />
            <Route path="/student-dashboard" element={
              <PrivateRoute>  <StudentDashboard />  </PrivateRoute>} />


          </Routes>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
