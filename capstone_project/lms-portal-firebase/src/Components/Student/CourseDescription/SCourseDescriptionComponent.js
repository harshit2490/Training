import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getCourseEnrolled, getCourseEnrolledCat, useAuth } from '../../../Contexts/AuthContext';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';


function SCourseDescriptionComponent() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [courseEnrolledCat, setCourseEnrolledCat] = useState("");

    useEffect(() => {
        async function fetchCourseEnrolled() {
            let courseEnrolledCat = await getCourseEnrolledCat(currentUser.uid); // Get 'courseEnrolledCat'
            setCourseEnrolledCat(courseEnrolledCat);
        }
        fetchCourseEnrolled();
    }, [currentUser, navigate]);

    // console.log(courseEnrolledCat);
    // console.log(currentUser.email)

    return (
        <section className='p-4'>
            {/* -------------(Course-Accordian)--------------- */}
            <div className='text-center px-5 mx-5'>
                <h2><span className='text-primary'>{courseEnrolledCat} </span> Lecture's</h2>
                <hr className="w-100 background shadow" style={{ paddingTop: "2px" }} />
            </div>
            <div className='user-email px-3 '>
                <p className='text-center'>
                    <div className='p-1'>
                        <span>Enrolled User: </span>
                        <span> <i class="fa fa-envelope" aria-hidden="true"></i> </span>
                        <span>{currentUser.email}</span>
                        <span className='px-4'>
                            <a href='https://docs.google.com/spreadsheets/d/e/2PACX-1vSs5cjEJBijmRG4UapzSc03d3Y96ibOLjZzInSEsk3K33jg7qrb6am-GsZo5rDnmLxJOoFhF_MzlVQw/pubhtml?gid=0&single=true' target="_blank">
                                <button className='btn btn-info'>
                                    Click to View TOC
                                </button>
                            </a>
                        </span>
                    </div>
                </p>
            </div>

            <div className='bg-white border-dark shadow p-2'>
                <div className='py-2'></div>
                <MDBProgress height='15' md='4'>
                    <MDBProgressBar width='25' valuemin={0} valuemax={100}>
                        25% Progress
                    </MDBProgressBar>
                </MDBProgress>

                <div className='accordian py-2 justify-content-center'>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Lecture-1
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Lecture-2
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Lecture-3
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Lecture-4
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Lecture-5
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Lecture-6
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSeven">
                                <button class="accordion-button collapsed btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    <strong>Bonus Content</strong>
                                </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* -------------(Accordian-End)--------------- */}

            {/* ------------(Instructor-Profile)------------ */}
            <div className='container py-3 d-flex justify-content-center'>
                <MDBCard style={{ maxWidth: '540px' }}>
                    <MDBRow className='g-0'>
                        <div>
                            <h2 className='text-center pt-2'>Instructor</h2>
                            <hr style={{ padding: "1px" }} />
                        </div>
                        <MDBCol md='4'>
                            {/* <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid /> */}
                            <figure className="figure pt-4 border border-dark rounded-circle">
                                <img src={require('./profile.jpg')} alt='banner'
                                    className="figure-img rounded-circle" height="130px" width="150px" />
                            </figure>
                            <div><p><strong>Avinash Jain</strong></p></div>
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle>About</MDBCardTitle>
                                <MDBCardText>
                                    Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational platform focused on bringing the best programming content...
                                </MDBCardText>
                                <MDBCardText>
                                    <small className='text-muted pb-2'>Last updated 40 mins ago</small>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </div>


            {/* ----------(Instructor-Profile End)---------- */}

        </section>
    )
}

export default SCourseDescriptionComponent