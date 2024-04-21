import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";


function Itineraries(props) {
  const [itineraries, setItineraries] = useState([]);
  
  const myBooleanValue = sessionStorage.getItem("myBooleanValue");

  const{code}=useParams();
  let navigate = useNavigate();
  
    const checkforlogin = () => {

      const jwtToken = sessionStorage.getItem('token');
      console.log(jwtToken);

      if(jwtToken==null)
      {
        alert("Please Login If you are already a Customer else you have to register");
      }
      else
      {
        sessionStorage.setItem('itineraries', JSON.stringify(itineraries));
        console.log("Dondndnvn");
        navigate("/BookingPage");
      }


    };


  useEffect(() => {
    fetch("http://localhost:8080/api/itinerary/"+code)
      .then(response => response.json())
      .then(data => {setItineraries(data);
        sessionStorage.setItem("itineraries", )
        console.log("Data of Itineraries" + data);
      })
      .catch(error => console.log(error));
  }, []);

  return (<div class="container mt-3">
  <div class="row" style={{ backgroundColor: "rgb(217 204 166)" }}>
    <div class="col">
      {itineraries.map((item) => (
        <div key={item.itinerary.itrid} class="card mb-4">
          <img src={item.categoryimage} class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 class="card-title" style={{ fontFamily: "serif", color: "rgb(235 60 14)" }}>
              {item.categoryname}
            </h2>
            <p class="card-text">
              <strong>Tour Duration:</strong> {item.itinerary.tourduration}
            </p>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th>Single Person Cost:</th>
                  <td>{item.singlepersoncost}</td>
                </tr>
                <tr>
                  <th>Extra Person Cost:</th>
                  <td>{item.extrapersoncost}</td>
                </tr>
                <tr>
                  <th>Child with Bed:</th>
                  <td>{item.childwithbed}</td>
                </tr>
                <tr>
                  <th>Offer Valid From:</th>
                  <td>{item.validfrom}</td>
                </tr>
                <tr>
                  <th>Offer Valid To:</th>
                  <td>{item.validto}</td>
                </tr>
                <tr>
                  <th>Tour departure Date:</th>
                  <td>{item.date.departuredate}</td>
                </tr>
                <tr>
                  <th>Tour end date:</th>
                  <td>{item.date.enddate}</td>
                </tr>
              </tbody>
            </table>
            <div class="text-center">
              <button type="submit" onClick={checkforlogin} class="btn btn-primary">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div class="col">
      {itineraries.map((item) => (
        <div key={item.itinerary.itrid} class="card mb-4">
          <div class="card-body">
            <h2 class="card-title" style={{ fontFamily: "Cursive", color: "rgb(235 60 14)" }}>
              {item.categoryname}
            </h2>
            <hr />
            {item.itinerary.itrdetail.split("...").map((line, index) => (
              <p class="card-text" align="left" key={index}>
                {line}
                <hr/>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  );
}

export default Itineraries;