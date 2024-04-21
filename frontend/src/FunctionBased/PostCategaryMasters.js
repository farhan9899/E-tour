import {  useState } from "react";
import {  Table } from "react-bootstrap";

import { useNavigate} from "react-router-dom";

export default function PostCategaryMasters(){

    const [categary, setCategary]=useState([]);
    let navigate = useNavigate();


    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setCategary(values => ({...values, [name]:value}))
    }
  
    const handleSubmit = (e) =>{
        let data = JSON.stringify(categary);
        fetch("http://localhost:5272/api/categary_master",{
           method: 'POST',
           headers: {'Content-type':'application/json'},
           body: data 
        }).then(res => res.json()) ;
        e.preventDefault();
        navigate('/');
    }
    
    return(
        <div style={{    display: "flex",justifyContent:"center" }}>
        <form onSubmit={handleSubmit}>
            <Table striped bordered hover style={{width: "fit-content", backgroundColor: "#8ac0ef", margin: "10px" }}>
            <thead>
            <tr>
            <th>catId</th>
            <td><input type="text" name="catId" defaultValue={""} onChange={handleChange}/></td>
            </tr>  
            <tr>
            <th>subcatId</th>
            <td><input type="text" name="subcatId" defaultValue={""} onChange={handleChange}/></td>
            </tr>  
            <tr>
            <th>catName</th>
            <td><input type="text" name="catName" defaultValue={""} onChange={handleChange}/></td>
            </tr>  
            <tr>
            <th>catImagePath</th>
            <td><input type="text" name="catImagePath" defaultValue={""} onChange={handleChange}/></td>
            </tr>  
            <tr >
            <td></td>
            <td >
            <input type="submit" style={{background: "blanchedalmond", borderRadius: "10px"}}/>
            </td>
            </tr>
          </thead>
        </Table>
         
    </form>

    </div>
    )
}
   
