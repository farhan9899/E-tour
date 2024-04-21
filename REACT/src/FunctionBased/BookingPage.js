import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../MyFiles/table.css';
import {
    FormGroup,
  FormControl,
  Input,
  InputLabel,
    Typography,
  styled,
    Button,
  } from "@mui/material";
import PassengerForm from "./PassengerForm";
import { Navigate } from "react-router-dom";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
export default function BookingPage() {
  const customer = JSON.parse(sessionStorage.getItem("customer"));
  const navigate = useNavigate();
  const itineraries = JSON.parse(sessionStorage.getItem("itineraries"));
  const [ arr , setArr] = useState({});
  const [arrayOfPass, setArrayOfPass] = useState([]);


  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  const getUpdatedPass = (arr) => {
    setArrayOfPass(prevArray => [...prevArray, arr]);
    console.log({arrayOfPass});
  }

  const onPost = () => {

  
    const bookiee = {
      bookingid : 0,
      bookingdate  : getCurrentDate(),
      noofpassenger : arrayOfPass.length,
      touramount : 110,
      taxes : 110,
      totalamount : 10,
      bookcustomerid : customer.customerid,
      bookmasterid : itineraries[0].itinerary.itimasterid,
      bookdepartureid : itineraries[0].date.departureid,
      status : true
    }

    const BookingData  = {
      booking : bookiee,
      passengers : arrayOfPass
    }
   


    const token = sessionStorage.getItem('token');
    sessionStorage.setItem("bookingData", JSON.stringify(BookingData));
    fetch("http://localhost:8080/api/booking", {
      method: "POST",
      headers: { "Content-type": "application/json"},
      body: JSON.stringify(BookingData),
    })
      .then((res) => res.json()).then((res)=>console.log("Backend :",res))
      .then(console.log("DOne na bosssssssss"));
           navigate('/Invoice');
   
      
  }

  

  return (
    <Container style={{backgroundColor: "#efecc5"}}>
      <Typography variant="h4" style={{color: "#830c0c", backgroundColor: "#f2d25a", textAlign: "center"}}>Book Your Tour  {itineraries[0].categoryname}</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name="Cust_Name" defaultValue={customer.customername} style={{marginLeft: "23px",color: "#830c0c"}}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="Email" defaultValue={customer.email} style={{marginLeft: "23px",color: "#830c0c"}}/>
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input name="Password" defaultValue={customer.password} style={{marginLeft: "23px",color: "#830c0c"}}/>
      </FormControl>
      <FormControl>
        <InputLabel>Country_Code</InputLabel>
        <Input name="Country_Code" defaultValue={customer.countrycode} style={{marginLeft: "23px",color: "#830c0c"}}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone_Number</InputLabel>
        <Input name="Phone_Number" defaultValue={customer.phonenumber} style={{marginLeft: "23px",color: "#830c0c"}}/>
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input name="Address" defaultValue={customer.address} style={{marginLeft: "23px",color: "#830c0c"}}/>
      </FormControl>
      <FormControl>
        <InputLabel>Proof_Id</InputLabel>
        <Input name="Proof_Id" defaultValue={customer.proofid} style={{marginLeft: "23px",color: "#830c0c"}}/>
      </FormControl>
      <FormControl>
        <InputLabel>Gender</InputLabel>
        <Input name="Gender" defaultValue={customer.gender} style={{marginLeft: "23px",color: "#830c0c"}}/>
      </FormControl>
      <FormControl>
        <InputLabel>Age</InputLabel>
        <Input name="Age" defaultValue={customer.age} style={{marginLeft: "23px",color: "#830c0c"}}/>
      </FormControl>

      <Button  href="PassengerForm">Add Passenger</Button>
      <PassengerForm  updatePass={getUpdatedPass} />
      <FormControl>
        {/* <Button variant="contained" onClick={onPost} style={{ width:"50px"}}>Done</Button> */}
        <button className="btn btn-primary mt-2" onClick={onPost} style={{marginLeft: "230px" , width:"36%"}}>Done</button>
      </FormControl>
      <br />
      <br />
      <table
        class="container-xxl col-md-6 mb-2 bordered-table "
        id="results-table"
      ></table>
    </Container>
  );
}