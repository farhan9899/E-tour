import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "./Navbar";
import "../MyFiles/continer.css";
import Carousel from "react-bootstrap/Carousel";
import { Morquee } from "../Etour/Marquee";

function HomePage() {
  const [Categary, setCategary] = useState([]);
  const [data, setdata] = useState("");

  let arrayCost1 = 0;
  sessionStorage.setItem("arrayCost1", arrayCost1);


  useEffect(() => {
   
    // fetch("http://localhost:4000/api/category_master")
    fetch("http://localhost:8080/api/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategary(result);
      
      });
  }, []);



  return (
    <div>
      <Morquee/>
     
      <br />
      <hr />

      <h1 align="center" style={{color:"black", backgroundColor:"#b591c2"}}>
        {" "}
        All inclusive tours{" "}
      </h1>

      <hr />
      <br />
      <br />
      <div className={"card-container"}>
        {Categary.map((cat) => (
          <Card style={{ margin: "2%", boxShadow: "rgb(0 0 0) 0px 0px 24px" }} className={"card"}>
            <Card.Img variant="top" src={cat.categoryimage} style={{ width: '100%', height: '180px' }}/>
            <Card.Body>
              <Card.Title>{cat.categoryname}</Card.Title>
              <Card.Text>
                {/* {cat.cat_Id}
                {cat.flag} */}
                
              </Card.Text>
              {cat.flag == true ? (
                <Button variant="primary" href={"/Itineraries/"+cat.masterid}>
                  View Details
                </Button>
              ) : (
                <Button variant="primary" href={"/Search/" + cat.categoryid}>
                  Explore
                </Button>
              )}

                {/* this is for nodejs */}
                
          {/* {cat.flag.data.toString() == 1 ? (
                <Button variant="primary" href={"/Itineraries/"+cat.masterid}>
                  View Details
                </Button>
              ) : (
                <Button variant="primary" href={"/Search/" + cat.categoryid}>
                  Explore
                </Button>
              )} */}

            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
