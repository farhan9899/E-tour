// import { useEffect, useState } from "react";
// import { Button, Card, Table } from "react-bootstrap";
//import { useParams } from "react-router-dom";
//import Navbar from 'react-bootstrap/Navbar';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';


import { Button, Form } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
// import { ServerStyleSheet } from 'styled-components';


export function LoginForm({ handleClose, handleShow, responseMessage, setResponseMessage, show , formik }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="phonenumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phonenumber"
              value={formik.values.phonenumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.phonenumber && !!formik.errors.phonenumber}
              placeholder="Enter phone number"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.phonenumber}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.password && !!formik.errors.password}
              placeholder="Enter password"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "center", marginTop:"10px"}}>
          <Button variant="primary" onClick={formik.handleSubmit}>
            SignIN
          </Button>
          <Button variant="primary" href='/RegistrationForm'style={{marginLeft:"17px"}}>
            SignUp
          </Button>
          </div>
        </Form>
        {responseMessage}
      </Modal.Body>
    </Modal>
  );
}

export default function Navigation() {

    const validationSchema = Yup.object().shape({
              phonenumber: Yup.number()
                .typeError('Phone number must be a number')
                .required('Phone number is required'),
              password: Yup.string()
                .required('Password is required')
                                        // .matches(
                                        //   /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/,
                                        //   'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number or special character'
                                        // ),
            });
          
            const [show, setShow] = useState(false);
            const [responseMessage, setResponseMessage] = useState('');
             const [SignedIn, setSignedIn] = useState(sessionStorage.getItem('isLoggedIn'));
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            const token = sessionStorage.getItem('token');
          
            const formik = useFormik({
              initialValues: {
                phonenumber: '',
                password: '',
              },
              validationSchema: validationSchema,
              onSubmit: (values, { resetForm }) => {
                fetch("http://localhost:8080/token", {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(values)
                  
                })
                  .then(response => response.json())
                  .then((data) => { console.log(data.token);
            
                    if (data.token!=null) {
                                                        // setResponseMessage('Login done.');
                      alert('Login done.')
                      setResponseMessage("Login done.");
                      console.log(data);
                      console.log("master : "+data.master.address);
                      sessionStorage.setItem('customer',  JSON.stringify(data.master));
                      sessionStorage.setItem('token', data.token);
                      setTimeout(handleClose, 1000); // Close modal after 3 seconds
                      setTimeout(resetForm, 1000);
                      setSignedIn(!SignedIn);
                    }
                     else {
                      sessionStorage.setItem("isLoggedIn", false);
                      setResponseMessage("Login credentials are incorrect.");
                      setTimeout(resetForm, 500);
                       setSignedIn(SignedIn);
                      alert('Login credentials are incorrect.')
                    }
                    handleShow();
                  })
                  .catch(error => console.error(error));
              },
            });

            const handlehide =()=>  {
              sessionStorage.setItem('isLoggedIn', false); 
              sessionStorage.setItem("myBooleanValue", false);
              setSignedIn(!SignedIn);
              alert("You are successfully SignOut")
          }

          const mystyle ={
              position: "fixed",
              top: "0",
              left: "0",
              right: "0"
           
          }

  return (
    <div>
         <header>
        <nav class="navbar navbar-expand-lg bg-light menu fixed-top" style={mystyle}>
            <div class="container-fluid">
                <a class="navbar-brand" href="/HomePage">IndiaTour</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/CategaryMasters">AllCategary</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/FormPage">Form</a>
                        </li> */}
                        <li class="nav-item">
                            <a class="nav-link" href="/RegistrationForm">Registration</a>
                        </li>

                        <li class="nav-item" >
                           {SignedIn  ? <Button variant="primary" onClick={handlehide}>Sign Out</Button>: <Button variant="primary" onClick={handleShow}>Sign In</Button>}
                        </li>
                        <li class="nav-item" style={{marginLeft:"10px"}}>
                            <a type="button" class="btn btn-primary" href="/ContentSearch" style={{marginleft: "10px"}}>
                              Search
                            </a>
                        </li>
                        <li class="nav-item" style={{marginLeft:"10px"}}>
                            {/* <a type="button" class="btn btn-primary" href="/Adminlogin" style={{marginleft: "10px"}}> */}
                            {/* <a type="button" class="btn btn-primary" href="/LinkData" style={{marginleft: "10px"}}>
                              Admin
                            </a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <LoginForm
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          responseMessage={responseMessage}
          setResponseMessage={setResponseMessage}
          formik={formik}
        />
    </div>
  );
}


{/* {sessionStorage.getItem('isLoggedIn') ? <Button variant="primary" onClick={handlehide}>Sign Out</Button>: <Button variant="primary" onClick={handleShow}>Sign In</Button>} */}
{/* <Button variant="primary" onClick={handleShow}>{SignedIn ? "Sign Out" : "Sign In"} </Button> */}
                           