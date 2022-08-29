import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getCourseEnrolled, getCourseEnrolledCat, useAuth } from '../../../Contexts/AuthContext';
import { Link } from 'react-router-dom';
import IndividualIntervalsExample from './Carousel';

function SEnrolledCoursesComponent() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [courseEnrolled, setCourseEnrolled] = useState("");
    const [courseEnrolledCat, setCourseEnrolledCat] = useState("");


    useEffect(() => {
        async function fetchCourseEnrolled() {
            let courseEnrolled = await getCourseEnrolled(currentUser.uid); // Get 'courseEnrolled'
            setCourseEnrolled(courseEnrolled);

            let courseEnrolledCat = await getCourseEnrolledCat(currentUser.uid); // Get 'courseEnrolledCat'
            setCourseEnrolledCat(courseEnrolledCat);
        }
        fetchCourseEnrolled();
    }, [currentUser, navigate]);

    console.log(courseEnrolledCat);
    console.log(courseEnrolled)
    console.log(currentUser.email)

    return (
        <>
            <IndividualIntervalsExample />
            <div className='my-2 d-flex text-align-center justify-content-center'>
                <h1>Your Enrolled <span className='text-primary'>Courses</span></h1>
            </div>
            <hr className="w-75 m-auto background shadow" style={{ padding: "1px" }} />

            <div className="d-flex text-align-center justify-content-center pt-2">
                <div className="col-sm-12 col-md-8 col-lg-8 col-12">

                    <h2>Hello <span className='text-primary'>{currentUser.email}</span> you have been enrolled in 
                    <div className='badge bg-warning text-black shadow'>{courseEnrolledCat}</div></h2>

                    <Link to="/student-course-description">
                        <div className='px-3 py-4 '>
                            <button className='btn-success px-3 py-1 rounded-3'>Click here to view the course</button>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default SEnrolledCoursesComponent;