import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { FaLink } from "react-icons/fa";
import { textAlign } from '@mui/system';

 export function LinkData() {
  const [link, setLink] = useState(null);
  const [data, setData] = useState([]);
  const links = [
    { name: 'Booking Header', url: 'showbookings'},
    { name: 'Category Master', url: 'showcategories' },
    { name: 'Cost Master', url: 'showcosts' },
    { name: 'Date Master', url: 'showdates' },
    { name: 'Itinerary Master', url: 'showitineraries' },
    { name: 'Passenger Master', url: 'passenger_master' },
    {name: 'Customer Master', url: 'showcustomers'}
  ];
  useEffect(() => {
    if (link) {
      fetchData(link.url);
    }
  },[link]);
  

  const handleClick = (link) => {
    setLink(link);
    
  };
const fetchData = async (url) => {
    const response = await fetch(`http://localhost:8080/api/admin/${url}`);
    const result = await response.json();
    setData(result);
   // console.log(result)
  };;

  const renderTableHeader = () => {
    if (data.length > 0) {
      let header = Object.keys(data[0]);
      return header.map((key, index) => {
        // Check if any item in the column is an array
        if (data.some(item => Array.isArray(item[key]))) {
          return ''; // Skip adding header for column with array values
        }
        return <th key={index}  style={{ color: "black" }}>{key.toUpperCase()}</th>;
      });
    }
  };
  

  const renderTableData = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        
        let columns = Object.keys(item);
        return (
          <tr key={index}>
            {columns.map((column, index) => {
              let cellData = item[column];
              // Check if the cell data is a date-time string
              if (typeof cellData === 'string' && Date.parse(cellData)) {
                // Create a new Date object from the string
                let dateObj = new Date(cellData);
                // Format the date portion of the object
                cellData = dateObj.toLocaleDateString();
              }
              if (Array.isArray(cellData)) {
                return null; // Skip rendering this cell
              }
              return <td key={index}>{cellData}</td>
            })}
            <td style={{ display: "flex", justifyContent: "space-evenly"}}>
             <Button variant="primary" href={'/updateSelected/'+link.url+"/"+(item[Object.keys(item)[0]])}>Update</Button>
            <Button variant="primary" href={'/deleteSelected/'+link.url+"/"+(item[Object.keys(item)[0]])}>Delete</Button>
            <Button variant="primary" href={'/displaySelected/'+link.url+"/"+(item[Object.keys(item)[0]])}>Display</Button>
            
            </td>
            
          </tr>
        )
      });
    }
   
  };
  return (
    <div>
    <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: "space-around", marginTop: '20px' , flexWrap:"wrap"}}>
  {links.map((link, index) => (
    <li key={index}>
      <button
        style={{
          border: "none",
          backgroundColor: "#e5cda3",
          color: "Black",
          padding: "10px",
          borderRadius: "5px",
          marginLeft: "50px",
          marginRight: "50px",
          marginTop: "50px",
          transition: "transform 0.3s ease",
          // marginLeft: "50px"
        }}
        onClick={() => handleClick(link)}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <FaLink style={{ marginRight: "5px" }} />
        {link.name}
      </button>
    </li>
  ))}
</ul>
      
        <br/>
        <br/>
        <Table responsive>
                <tbody>
                  <tr >
                  {renderTableHeader()}
                  <th  style={{ color: "black" ,textAlign:"center", fontSize:"25px" }} >ACTIONS</th>
                  </tr>
                  {renderTableData()}
                  
                </tbody>
            </Table>
      <div style={{display:"flex", justifyContent:"center" }}>      
      <Button   href='/AddAdmin'>Add new Admin</Button>
      {/* <Button   href='/Bookmaster' style={{marginLeft:"35px"}}>Book</Button> */}
      </div>
    </div>
  );
}

export default LinkData;