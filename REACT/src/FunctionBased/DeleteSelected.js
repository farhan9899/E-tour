import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteSelected() {
  const [data, setData] = useState([]);
  const { url, code } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState({});
  
  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/admin/${url}/${code}`;
console.log(apiUrl);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((error) => console.log(error));
  }, [url, code]);

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete the selected record?");
    if (!confirmed) {
      return;
    }
    const res = await fetch(`http://localhost:8080/api/admin/${url}/${code}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.ok) {
          alert("Record deleted successfully");
          navigate("/LinkData");
        } else {
          alert("Failed to delete record");
        }
        return res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
    return res;
  };
  const renderTableHeader = () => {
    if (record) {
      let header = Object.keys(record);
      return header.map((key, index) => {
        if (record[key]) {
          return <th key={index}>{key.toUpperCase()}</th>;
        }
        return " ";
      });
    }
  };

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

            return <td key={index}>{cellData}</td>;
          })}
        </tr>
      );
    }
  };

  return (
    <div>

      <Table striped hover bordered>
        <thead>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}