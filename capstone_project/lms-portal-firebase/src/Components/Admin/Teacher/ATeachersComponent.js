import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { enrolled, getAllDocs, getAllTeachers, useAuth } from '../../../Contexts/AuthContext';
import { db } from '../../../Contexts/firebase';
import { Card, Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify'; // Using Toast
import 'react-toastify/dist/ReactToastify.css';         // Using Toast

function ATeachersComponent() {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [allTeachers, setAllTeachers] = useState([]);
    const [allDocs, setAllDocs] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        id: "", name: "", email: "", Role: ""
    });

    // Fetch all student details...
    useEffect(() => {
        async function fetchAllTeachers() {
            let every = await getAllTeachers();
            setAllTeachers(every);

            let allDocs = await getAllDocs();
            setAllDocs(allDocs);
        }
        fetchAllTeachers();
    }, [currentUser, navigate]);

    // const enrolled = async () => {
    //     let docID = 'abcdefg'
    //     // console.log(docID)   
    //     const citiesRef = collection(db, "users");
    //     setDoc(doc(citiesRef, docID), {
    //         email: "harsh123@gmail.com",
    //         role: "TEACHER",
    //         username: "Harsh",
    //     });
    // }

    const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
    }

    const { id, email, Role, name } = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        enrolled(id, email, Role, name);
    }

    // function enrolled(idRef, nameRef, emailRef, roleRef) {
    //     let docID = idRef
    //     // console.log(docID)   
    //     const citiesRef = collection(db, "users");
    //     setDoc(doc(citiesRef, docID), {
    //         email: emailRef,
    //         role: roleRef,
    //         username: nameRef,
    //     });
    // }

    function unenrolled(e) {
        console.log(e)
        console.log(allDocs)
        let i = 0;
        let a = allDocs[0].length
        console.log(a)
        while (i < a) {

            if (e === allDocs[0][i].email) {
                console.log("matched")
                let id = (allDocs[0][i].id);
                deleteDoc(doc(db, "users", id));
            }
            i += 1
        }
    }

    // Using Toast: https://fkhadra.github.io/react-toastify/introduction/
    const notify = () => toast("New Teacher added successfully, please refresh the page...");


    return (
        <>
            <section className="justify-content-center">
                <div className='my-2 d-flex text-align-center justify-content-center'>
                    <h1>Teacher's <span className='text-primary'>Detail</span></h1>
                </div>
                <hr className="w-75 m-auto background shadow" style={{ padding: "1px" }} />

                <div className='mt-4 pt-3 d-flex text-align-center justify-content-center'>
                    <h4>List of Registered <span className='text-primary'>Teacher's Detail</span></h4>
                </div>

                <div className="d-flex text-align-center justify-content-center pt-2">
                    <div className="col-sm-12 col-md-8 col-lg-8 col-12">
                        <table class="table shadow border-dark">
                            <thead class="thead-dark bg-black text-white">
                                <tr>
                                    <th scope="col"><i class="fa fa-arrow-right"></i></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            {/* ----------{Render Student Details}----------- */}
                            {allTeachers && allTeachers.map((res) => {
                                return (
                                    <>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-arrow-right"></i></td>
                                                <td>{res.username}</td>
                                                <td>{res.email}</td>
                                                <td>{res.role}</td>
                                                <td><button className="btn-danger" onClick={() => unenrolled(res.email)}>Delete</button></td>
                                            </tr>
                                        </tbody>
                                    </>
                                )
                            })}
                        </table>
                        {/* <button onClick={unenrolled}>Delete Teacher</button> */}
                    </div>
                </div>

                {/* -------------(Modal)------------ */}
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
                                        <h2>Fill the teacher details...</h2>
                                        <hr />
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="py-2">
                                            <Form.Group>
                                                <Form.Label>Name:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Name"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => onInputChange(e)}
                                                    required
                                                />
                                            </Form.Group>
                                        </div>
                                        <Form.Group>
                                            <Form.Label>Email Id:</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Email *"
                                                name="email"
                                                value={email}
                                                onChange={(e) => onInputChange(e)}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Label>Role: TEACHER</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="role"
                                                name="Role"
                                                value={Role}
                                                onChange={(e) => onInputChange(e)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Label>Id:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="id"
                                                name="id"
                                                value={id}
                                                onChange={(e) => onInputChange(e)}
                                            />
                                        </Form.Group>
                                        <div className='py-2 d-flex justify-content-center'>
                                            <Button variant="success" type="submit" block onClick={notify}>
                                                Add New Teacher
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Container>
                </div>

                {/* -----------(Form-End)------------ */}
            </section>
        </>
    )
}

export default ATeachersComponent;