import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Outlet, useParams } from 'react-router-dom';
import '../MyFiles/table.css';

function Search (props){

const [Categary, setCategary] = useState([]);
const{code}=useParams();

useEffect( () => {
  // fetch("http://localhost:4000/api/category_Master/"+code).then(res => res.json())
   fetch("http://localhost:8080/api/categoriessub/"+code).then(res => res.json())
  .then(result => {
    setCategary(result);
  } 
  );
  }, []);

    
  //const info=Categary.filter((cat)=>cat.subcatId.includes(code));

 return(
    <div className={"card-container"}>
      {/* <h3 style={{}}>Categary Table Data</h3> */}
    
        { Categary.map(cat => ( 
            <Card style={{margin:"2%",boxShadow: "rgb(0 0 0) 0px 0px 24px"  }} className={"card"}>
            <Card.Img variant="top" src={cat.categoryimage} style={{ width: '100%', height: '180px' }} />
            <Card.Body>
              <Card.Title>{cat.categoryname}</Card.Title>
              <Card.Text>
              
              </Card.Text>
             
             {/* this is for nodejs */}
              {/* {(cat.flag.data.toString() == 1) ? (<Button variant="primary" href={'/Itineraries/'+cat.masterid}>View Details</Button>) : (<Button variant="primary" href={"/Search/"+cat.categoryid}>Explore</Button>) }            </Card.Body> */}
             
             {/* this is for java */}
              {(cat.flag == true) ? (<Button variant="primary" href={'/Itineraries/'+cat.masterid}>View Details</Button>) : (<Button variant="primary" href={"/Search/"+cat.categoryid}>Explore</Button>) }            </Card.Body>
          </Card>
        ))
        }
      
    </div>

    
  );
}

export default Search;