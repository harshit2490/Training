import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserRole, useAuth } from "../Contexts/AuthContext";

function MainDashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();


  // Getting user role and navigate to required component...
  useEffect(() => {
    async function fetchUserRole() {
      let role = await getUserRole(currentUser.uid);  // getUserRole defined in AuthContext.js
      if (role === "STUDENT") {
        // console.log(role);
        navigate("/student-profile-view")
      }
      else if (role === "ADMIN") {
        // console.log(role);
        navigate("/admin-profile-view")
      }
      else if (role === "TEACHER") {
        // console.log(role);
        navigate("/teacher-profile-view")
      }
      else{
        navigate("/home")
      }
    }
    fetchUserRole();
  }, [currentUser, navigate]);

  return(
    <></>
  )
}

export default MainDashboard;