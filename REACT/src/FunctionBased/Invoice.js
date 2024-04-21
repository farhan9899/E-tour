import React, { useState, useEffect } from 'react';
import '../MyFiles/forinvoice.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentPage from './PaymentPage';


export default function Invoice() {
  const [invoice, setInvoice] = useState({});
  const customer = JSON.parse(sessionStorage.getItem("customer"));
  const itineraries = JSON.parse(sessionStorage.getItem("itineraries"));


  useEffect(() => {

      fetch("http://localhost:8080/api/invoice")
        .then((res) => res.json())
        .then((result) => {
          setInvoice(result);
          console.log(result);
        });
 
  }, []);
  
  

  return (

    <div
    className="invoice-container container mt-5"
    style={{ width: "70%", backgroundColor: "#dbdec3" }}
  >
    <h1
      className="invoice-header text-center mb-4"
      style={{ color: "#ce8523" }}
    >
      Invoice
    </h1>
    <div
      className="invoice-card card p-4"
      style={{ backgroundColor: "#c5bcb0" }}
    >
      <div className="row">
        <div className="col-6">
          <p>
            <span className="fw-bold">Booking ID:</span> {invoice.bookingid}
          </p>
          <p>
            <span className="fw-bold">Customer Name:</span>{" "}
            {customer.customername}
          </p>
          <p>
            <span className="fw-bold">Address:</span>{" "}
            {customer.address}
          </p>
         
        </div>
        <div className="col-6">
        <p>
            <span className="fw-bold">Booking Date:</span>{" "}
            {invoice.bookingdate}
          </p>
          <p>
            <span className="fw-bold">Tour Name:</span> {" "}{itineraries[0].categoryname}
          </p>
          <p>
            <span className="fw-bold">Phone No.:</span>{" "}
            {customer.phonenumber}
          </p>
        </div>
      </div>
    </div>
    {invoice.passengermasters && invoice.passengermasters.length > 0 && (
      <div
        className="invoice-passenger-card card mt-4"
        style={{ backgroundColor: "#c5bcb0" }}
      >
        <div className="card-body">
          <h2 className="text-center card-title mb-4">Passenger Details</h2>

          <table
            style={{
              backgroundColor: "#e5dbce",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th>Passenger</th>
                <th>ID</th>
                <th>Name</th>
                <th>Birth Date</th>
                {/* <th>Type</th>
              <th>Amount</th> */}
              </tr>
            </thead>
            <tbody>
              {invoice.passengermasters.map((passenger, index) => (
                <tr key={index} style={{ borderBottom: "1px solid black" }}>
                  <td>{`Passenger ${index + 1}`}</td>
                  <td>{passenger.paxid}</td>
                  <td>{passenger.paxname}</td>
                  <td>{passenger.paxbirthdate}</td>
                  {/* <td>{passenger.paxtype}</td> */}
                <td>{passenger.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    )}
    <div
      className="invoice-card card p-4"
      style={{ backgroundColor: "#c5bcb0" }}
    >
      <div className="row">
        <div className="col-6">
          <p>
            <span className="fw-bold">Number of Passengers:</span>{" "}
            {invoice.noofpassenger}
          </p>
          <p>
            <span className="fw-bold">Tour Amount:</span> {invoice.touramount}
          </p>
        </div>
        <div className="col-6">
          <p>
            <span className="fw-bold">Taxes:</span> {invoice.taxes}
          </p>
          <p>
            <span className="fw-bold">Total Amount:</span>{" "}
            {invoice.totalamount}
          </p>
        </div>
      </div>
    </div>

    <tr>
            <td colSpan="6" >
              {/* <button className="btn btn-primary mt-2" style={{marginLeft: "380px"}} >Proceed to Pay</button> */}
              <a type="button" class="btn btn-primary" href="/PaymentPage" style={{ marginLeft:"400px"}}>
                           Proceed to pay
              </a>
            
            </td>
          </tr>
  </div>

    
  );
}


