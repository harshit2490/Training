import React, { useState, useEffect } from 'react';
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getUserName, useAuth, getUserRole } from '../../Contexts/AuthContext';

function AdminDashboard() {
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        // Logout functionality...
        setError("");
        try {
            await logout();
            navigate("/home");
        } catch {
            setError("Failed to logout");
        }
    };

    // Getting username from getUserName() function...
    useEffect(() => {
        async function fetchUserName() {
            let username = await getUserName(currentUser.uid);
            console.log("Admin Name: " + username);
            setUsername(username);

            let role = await getUserRole(currentUser.uid);  // getUserRole defined in AuthContext.js
            if (role === "STUDENT") {
                // console.log(role);
                navigate("/student-dashboard")
            }
            else if (role === "ADMIN") {
                // console.log(role);
                navigate("/admin-dashboard")
            }
            else if (role === "TEACHER") {
                // console.log(role);
                navigate("/teacher-dashboard")
            }
            else {
                navigate("/home")
            }
        }
        fetchUserName();
    }, [currentUser, navigate]);

    return (
        <>
            <Card className="card w-60">
                <Card.Body className="w-100 text-center mt-2">
                    <h3 className="bg-dark card text-white text-center mb-3">Admin Profile</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <hr />
                    <h3>
                        <strong>{username}</strong>
                    </h3>
                    <p>
                        <img
                            style={{ width: "150px", height: "150px" }}
                            src={currentUser.photoURL}
                            alt={currentUser}
                        />
                    </p>
                    <p>
                        <strong>Email: </strong>
                        {currentUser.email}
                    </p>
                    <p>
                        <strong>Last Login: </strong>
                        {currentUser.metadata.lastSignInTime}
                    </p>
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button varaint="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </>
    )
}

export default AdminDashboard;