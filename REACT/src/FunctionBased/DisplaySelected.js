import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import HomePage from "./HomePage";

export default function DisplaySelected() {
  const [record, setRecord] = useState({});
  const { url, code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/admin/${url}/${code}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [url, code]);

  const renderTableHeader = () => {
    if (record) {
      let header = Object.keys(record);
      return header.map((key, index) => {
        let columnData = record[key];
  
        // Check if the column has any data
        if (typeof columnData === "string" || typeof columnData === "number") {
          return <th key={index} style={{ color: "black" }}>{key.toUpperCase()}</th>;
        } else if (Array.isArray(columnData)) {
          // If column data is an array, skip adding it as a header
          return <th key={index}>{"_"}</th>;
        } else {
          // For other data types, add a placeholder header
          return <th key={index}>{"Header"}</th>;
        }
      });
    }
  };
  // const renderTableHeader = () => {
  //   if (data.length > 0) {
  //     let header = Object.keys(data[0]);
  //     return header.map((key, index) => {
  //       // Check if any item in the column is an array
  //       if (data.some(item => Array.isArray(item[key]))) {
  //         return ''; // Skip adding header for column with array values
  //       }
  //       return <th key={index}  style={{ color: "black" }}>{key.toUpperCase()}</th>;
  //     });
  //   }
  // };
  const renderTableData = () => {
    if (record) {
      let columns = Object.keys(record);
  
      return (
        <tr>
          {columns.map((column, index) => {
            let cellData = record[column];
  
            // Check if the cell data is a date-time string
            if (typeof cellData === "string" && Date.parse(cellData)) {
              // Create a new Date object from the string
              let dateObj = new Date(cellData);
              // Format the date portion of the object
              cellData = dateObj.toLocaleDateString();
            }
  
            // Check if the cell data is an array
            if (Array.isArray(cellData)) {
              return null; // Skip rendering this cell
            }
  
            return <td key={index}>{cellData}</td>;
          })}
        </tr>
      );
    }
  };

  return (
    <div>
      <h3>Selected Record</h3>
      <Table striped hover bordered>
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
      <Button variant="danger" onClick={() => navigate("/LinkData")}>
        Back
      </Button>
    </div>
  );
}