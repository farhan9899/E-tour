import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button, Card, FormControl, Form } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

export function LoginForm({
  handleClose,
  handleShow,
  responseMessage,
  setResponseMessage,
  show,
  formik,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="Phone_Number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="Phone_Number"
              value={formik.values.Phone_Number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.touched.Phone_Number && !!formik.errors.Phone_Number
              }
              placeholder="Enter phone number"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.Phone_Number}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="Password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.Password && !!formik.errors.Password}
              placeholder="Enter password"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.Password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" onClick={formik.handleSubmit}>
            Submit
          </Button>
        </Form>
        {responseMessage}
      </Modal.Body>
    </Modal>
  );
}

export function NavigationBar() {
  const validationSchema = Yup.object().shape({
    Phone_Number: Yup.number()
      .typeError("Phone number must be a number")
      .required("Phone number is required"),
    Password: Yup.string().required("Password is required"),
    // .matches(
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    //   'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number or special character'
    // ),
  });

  const [show, setShow] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      Phone_Number: "",
      Password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      fetch("https://localhost:7261/api/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.customer);
          if (data.success) {
            setResponseMessage("Login done.");
            sessionStorage.setItem("myBooleanValue", true);
            sessionStorage.setItem("customer", JSON.stringify(data.customer)); // Store the customer object in sessionStorage
            setTimeout(handleClose, 1000); // Close modal after 3 seconds
            setTimeout(resetForm, 1000);
          } else {
            sessionStorage.setItem("isLoggedIn", false);
            setResponseMessage("Login credentials are incorrect.");
            setTimeout(resetForm, 500);
            // resetForm();
          }
          handleShow();
        })
        .catch((error) => console.error(error));
    },
  });

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/HomePage">India tour</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/CategaryMasters">AllCategary</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button
              variant="primary"
              style={{ marginLeft: "10px" }}
              onClick={handleShow}
            >
              Log In
            </Button>
            <Button href="/LinkData" style={{ marginLeft: "10px" }}>
              Admin
            </Button>
            <Button
              href="/RegistrationForm"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              Register
            </Button>
            <Button class="btn btn-primary" href="/ContentSearchTrial">
              Search
            </Button>
          </Nav>
        </Container>
      </Navbar>

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
