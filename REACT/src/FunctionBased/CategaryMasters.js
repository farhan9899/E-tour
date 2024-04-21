import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function GetCategaryMasters (){

const [Categary, setCategary] = useState([]);


useEffect( () => {
  fetch("http://localhost:8080/api/category_master").then(res => res.json())
  .then(result => {
    setCategary(result);
  } 
  );
  }, []);

 return(
    <div style={{width: "75%",marginLeft:"180px"}}>
      <h3 style={{}}>Categary Table Data</h3>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Masterid</th>
          <th>categoryId</th>
          <th>subCategoryId</th>
          <th>categoryName</th>
          <th>categoryImage</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        { Categary.map(cat => (
          <tr key={cat.masterid}>
            <td>{cat.masterid}</td>
            <td>{cat.categoryid}</td>
            <td>{cat.subcategoryid}</td>
            <td>{cat.categoryname}</td>
            <td>{cat.categoryimage}</td>
            <td>{cat.flag}</td>
            <td style={{ display: "flex", justifyContent: "space-evenly"}}>
            <Button variant="primary" href={'/displayCategary/'+cat.catMaster_Id}>Display</Button>
            <Button variant="warning" href={'/updateCategary/'+cat.catMaster_Id}>Update</Button>
            <Button variant="danger" href={'/deleteCategary/'+cat.catMaster_Id}>Delete</Button>
            </td>
          </tr>
        ))
        }
      </tbody>
    </Table>
    </div>
  );
}

export default GetCategaryMasters ;
 

