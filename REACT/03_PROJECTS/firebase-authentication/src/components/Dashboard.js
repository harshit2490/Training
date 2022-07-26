import React, { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";


function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => { // Logout functionality...
        setError("");

        try {
            await logout();
            navigate("/login");
        } catch {
            setError("Failed to logout");
        }
    };


    return (
        <>
            <Card className="card w-60">
                <Card.Body className="w-100 text-center mt-2">
                    <h3 className="bg-dark card text-white text-center mb-3">Profile</h3>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <hr />
                    <h3>
                        <strong>{currentUser.displayName}</strong>
                    </h3>
                    <p>
                        <img style={{ width: '150px', height: '150px' }}
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
    );
}

export default Dashboard;