import React, { useState } from 'react'
import { Button, Container, Form, Card } from "react-bootstrap";
import { enrolledCourse } from '../../../Contexts/AuthContext';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Using Toast
import 'react-toastify/dist/ReactToastify.css';         // Using Toast

function AddCourse() {
    const [newCourse, setNewCourse] = useState({
        category: "", description: "", duration: "", id: "", image: "", ratings: "", title: ""
    });

    const onInputChange = (e) => {
        setNewCourse({ ...newCourse, [e.target.name]: e.target.value })
    }

    const { category, description, duration, id, ratings, image, title } = newCourse;

    const handleSubmit = (e) => {
        e.preventDefault();
        enrolledCourse(category, description, duration, id, ratings, image, title);
    }

    // Using Toast: https://fkhadra.github.io/react-toastify/introduction/
    const notify = () => toast("Course added successfully, go back to courses to view updated course...");


    return (
        <>
            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={10000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Container className="d-flex align-items-center justify-content-center">
                    <div className="w-100" style={{ maxWidth: "500px" }}>
                        <div className='py-2'>
                        </div>
                        <Card className="border border-secondary shadow">
                            <Card.Body>
                                <div className='text-center text-primary'>
                                    <h2>Fill the course details...</h2>
                                    <hr />
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Title:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Course title"
                                            name="title"
                                            value={title}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Category: FrontEnd / BackEnd / Programming / Software</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter course category..."
                                            name="category"
                                            value={category}
                                            onChange={(e) => onInputChange(e)}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Description:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Add description..."
                                            name="description"
                                            value={description}
                                            onChange={(e) => onInputChange(e)}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Duration in hour:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Duration of course in hour..."
                                            name="duration"
                                            value={duration}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Course Id:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="id"
                                            name="id"
                                            value={id}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Ratings out of 7 ⭐</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ratings in star..."
                                            name="ratings"
                                            value={ratings}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Label>Image URL for thumbnail</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Image Url..."
                                            name="image"
                                            value={image}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                    </Form.Group>

                                    <div className='py-2 d-flex justify-content-center'>
                                        <Button variant="success" type="submit" block onClick={notify}>
                                            Add New Course
                                        </Button>
                                    </div>

                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
                <Link to="/teacher-courses-view">
                    <div className='px-3 py-2 d-flex justify-content-center'>
                        <button className='py-2 px-3 btn-info rounded-4'>
                            Back to Courses
                        </button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default AddCourse