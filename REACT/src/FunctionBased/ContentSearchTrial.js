import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React from "react";
import '../MyFiles/table.css';

// export default class ContentSearch extends React.Component

export default function ContentSearchTrial() {

  var curr = new Date();
  curr.setDate(curr.getDate() + 1);
  var date = curr.toISOString().substring(0, 10);

  const numberOfDaysToAdd = 120;
  var fromdate = curr.setDate(curr.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(fromdate).toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    var newdata = {
      DepartDate: document.getElementById("Fromdate").value || date,
      EndDate: document.getElementById("Todate").value || defaultValue,
      NoOfDays: document.getElementById("ToPeriod").value || 20,
      SinglePersonCost: document.getElementById("CostStart").value ||1500000,
    };
    let data = JSON.stringify(newdata);
  
    fetch("https:/localhost:7261/api/Search", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          const table = document.getElementById("results-table");
          // Clear previous results
          table.innerHTML = "";
      
          if (data.success && data.results && data.results.length > 0) {
            // Create table headers
            const headers = ["Category", "Depart Date", "End Date", "Cost", "No. of Days","View Details"];
            const headerRow = document.createElement("tr");
            headers.forEach((header) => {
              const th = document.createElement("th");
              th.textContent = header;
              headerRow.appendChild(th);
            });
            table?.appendChild(headerRow);
      

             // Create table rows
            data.results.forEach((result) => {
              const row = document.createElement("tr");
              Object.values(result).forEach((value, index) => {
                // Get the property name for the current value
                const key = Object.keys(result)[index];
            
                // Check if the key is the one you want to skip
                if (key === "catMasterId" ) {
                  return; // Skip creating a cell for this property
                }
            
                const cell = document.createElement("td");
                if (typeof value === "string" && value.includes("T")) {
                  value = value.slice(0, 10);
                }
                cell.textContent = value;
                row.appendChild(cell);
              });
              table?.appendChild(row);
            
            
           
           
                   // create a new anchor tag
            const link = document.createElement('a');

            // set the href attribute
            link.href = "/Itineraries/"+(result.catMasterId);

            // set the text content
            link.textContent = 'Show Details';

            // append the link to the body of the HTML document
            row.appendChild(link);

            table?.appendChild(row);
          });
          } else {
            // Display no results message
            const noResultsRow = document.createElement("tr");
            const noResultsCell = document.createElement("td");
            noResultsCell.colSpan = "5";
            noResultsCell.textContent = "No results found";
            noResultsRow.appendChild(noResultsCell);
            table?.appendChild(noResultsRow);
          }
        });
  };
  

  return (
    
      <div  class=" container-xxl col-md-6 mb-2 "  >
  <Form  style={{ backgroundColor: "White" }} onSubmit={handleSubmit}>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="Date">
        <h6>
          <Form.Label> Start date </Form.Label>
          <Form.Control type="date" id="Fromdate" defaultValue={date} />
          <Form.Label> End date</Form.Label>
          <Form.Control type="date" id="Todate" defaultValue={defaultValue} />
          {/* <Button type="submit">Submit</Button> */}
          <Form.Label> Cost: </Form.Label>
          <Form.Control type="number" id="CostStart"  />
          Period:
          <Form.Label> To:</Form.Label>
          <Form.Control type="number" id="ToPeriod"   />
          <Button type="submit">Submit</Button>
        </h6>
      </Form.Group>
    </Row>
  </Form>

  <table class=" bordered-table table" id="results-table"></table>
</div>

);
}