import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getAllCourses, useAuth } from '../../../Contexts/AuthContext';

import { Link } from 'react-router-dom';


function SQuizesComponent() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [allCourses, setAllCourses] = useState([]);

    // Fetch all student details...
    useEffect(() => {
        async function fetchAllCourses() {
            let every = await getAllCourses();
            setAllCourses(every);
        }
        fetchAllCourses();
    }, [currentUser, navigate]);
    console.log(allCourses)

    return (
        <section>
            <div className='mt-2 d-flex text-align-center justify-content-center'>
                <h1>View <span className='text-primary'>Quizes</span></h1>
            </div>
            <hr className="w-75 m-auto background shadow" style={{ padding: "1px" }} />

            {/* -----------(Container)------------- */}
            <div className='container pt-3'>
                {/* -----------(Row-1)------------- */}
                <div className='row justify-content-center'>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-12'>
                        <div className="map p-2">
                            <div className="card h-100 text-center p-1 ">
                                <img className="card-img-top"
                                    src={require('./images/Frontend.webp')}
                                    alt="frontend"
                                />
                                <div className="card-body">
                                    <h3 className='title'>FrontEnd Quiz</h3>
                                    <Link to="/frontend-quiz">
                                        <button className='btn btn-outline-dark'>Take Quiz</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 col-12'>
                        <div className="map p-2">
                            <div className="card h-100 text-center p-1 ">
                                <img className="card-img-top"
                                    src={require('./images/Backend.png')}
                                    alt="frontend"
                                />
                                <div className="card-body">
                                    <h3 className='title'>BackEnd Quiz</h3>
                                    <Link to="/backend-quiz">
                                        <button className='btn btn-outline-dark'>Take Quiz</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -----------(Row-2)------------- */}
                <div className='row justify-content-center'>
                    <div className='col-sm-12 col-md-6 col-lg-4 col-12'>
                        <div className="map p-2">
                            <div className="card h-100 text-center p-1 ">
                                <img className="card-img-top"
                                    src={require('./images/Programming.jpg')}
                                    alt="frontend"
                                />
                                <div className="card-body">
                                    <h3 className='title'>Programming Quiz</h3>
                                    <Link to="/programming-quiz">
                                        <button className='btn btn-outline-dark'>Take Quiz</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-4 col-12'>
                        <div className="map p-2">
                            <div className="card h-100 text-center p-1 ">
                                <img className="card-img-top"
                                    src={require('./images/Software.jpg')}
                                    alt="frontend"
                                />
                                <div className="card-body">
                                    <h3 className='title'>Software Engineering Quiz</h3>
                                    <Link to="/software-quiz">
                                        <button className='btn btn-outline-dark'>Take Quiz</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -----------(Container-End)------------- */}
                </div>
            </div>
        </section>
    )
}

export default SQuizesComponent;