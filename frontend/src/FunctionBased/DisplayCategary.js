import { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";


export default function DisplayCategary(){
  
    const [categary, setCategary] = useState({});
    const {code} = useParams();

    useEffect(() => {
      fetch("http://localhost:5272/api/Categary_master/"+ code)
      .then(res => res.json()).then(result => {setCategary(result);});
    },{} );
    


    return(
   
      <div>
    <Card style={{ width: '18rem' }}>
     
      <Card.Img variant="top" src="/Images/tajmahal.jpg" />
      <Card.Body>
        <Card.Title>{categary.Cat_Id}</Card.Title>
        <Card.Text>
        {categary.CatName}
        </Card.Text>
    
        <Button variant="primary" href={'/displayCategary/'+categary.catMasterIid}>Display</Button>
      </Card.Body>
    </Card>
    
        </div>
    )
  }