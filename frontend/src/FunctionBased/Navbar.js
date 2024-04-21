
//   import Container from 'react-bootstrap/Container';
//   import Nav from 'react-bootstrap/Nav';
//   import { Button, Card, FormControl, Form } from 'react-bootstrap';
//   import Navbar from 'react-bootstrap/Navbar';
//   import Modal from "react-bootstrap/Modal";
//  import { useState } from 'react';
//  import * as Yup from 'yup';
// import { useFormik } from 'formik';


//   export default function NavigationBar (){


    
    
// const validationSchema = Yup.object().shape({
//   Phone_Number: Yup.number()
//     .typeError('Phone number must be a number')
//     .required('Phone number is required'),
//   Password: Yup.string()
//     .required('Password is required')
//     .matches(
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
//       'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number or special character'
//     ),
// });

// const [show, setShow] = useState(false);
// const [responseMessage, setResponseMessage] = useState('');

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

// const formik = useFormik({
//   initialValues: {
//     Phone_Number: '',
//     Password: '',
//   },
//   validationSchema: validationSchema,
//   onSubmit: (values, { resetForm }) => {
//     fetch('https://localhost:7014/api/Login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(values)
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         setResponseMessage('Login done.');
//         setTimeout(handleClose, 1000); // Close modal after 3 seconds
//         setTimeout(resetForm, 1000);
//       } else {
//         setResponseMessage('Login credentials are incorrect.');
//         setTimeout(resetForm, 500); 
//         // resetForm();
//       }
//       handleShow();
//     })
//     .catch(error => console.error(error));
//   },
// });


  
//        return (
//       <div>
//       <Navbar bg="dark" variant="dark">
//   <Container>
//     <Navbar.Brand href="/HomePage">Navbar</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link href="/CategaryMasters">AllCategary</Nav.Link>
//       <Nav.Link href="/FormPage">Form</Nav.Link>
//       <Nav.Link href="/PostCategaryMasters">Add Categary</Nav.Link>
//     </Nav>
//     <Nav className="ms-auto">
//       <Button variant="primary" onClick={handleShow}>
//         Log In
//       </Button>
//       <Nav.Link href="/Register" style={{marginLeft:"10px", marginRight:"20px"}}>Register</Nav.Link>
//     </Nav>
//     <Form className="d-flex">
//       <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Container>
// </Navbar>

//  <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal heading</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={formik.handleSubmit}>
//           <Form.Group controlId="Phone_Number">
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control
//               type="tel"
//               name="Phone_Number"
//               value={formik.values.Phone_Number}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               isInvalid={formik.touched.Phone_Number && !!formik.errors.Phone_Number}
//               placeholder="Enter phone number"
//             />
//             <Form.Control.Feedback type="invalid">
//               {formik.errors.Phone_Number}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="Password">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="Password"
//               value={formik.values.Password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               isInvalid={formik.touched.Password && !!formik.errors.Password}
//               placeholder="Enter password"
//             />
//             <Form.Control.Feedback type="invalid">
//               {formik.errors.Password}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" onClick={formik.handleSubmit}>
//   Submit
// </Button>

//         </Form>
//         {responseMessage}
//       </Modal.Body>
//     </Modal>
//       </div> 
//     );
//   }
