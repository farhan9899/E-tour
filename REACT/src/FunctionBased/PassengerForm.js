import React, { useEffect, useState } from 'react';
import '../MyFiles/table.css';

function PassengerForm(props) {
  const itineraries = JSON.parse(sessionStorage.getItem("itineraries"));
  const [paxname, setpaxname] = useState('');
  const [paxbirthdate, setpaxbirthdate] = useState('');
  const [paxtype, setpaxtype] = useState('singlePersonCost');
  const[amount, setAmount] = useState();
  const [paxid, setpaxid] = useState(0);
  const[passbookingid, setpassbookingid] = useState(1);
  const customer = JSON.parse(sessionStorage.getItem("customer"));
  const [passcustomerid, setPasscustomerid] = useState(customer.customerid);

  const [passData, setPassData] = useState([]);

  console.log("itinieririres : ",itineraries);


  useEffect(() => {
    console.log(passData);


    const ptable = document.getElementById("results-table");
    ptable.innerHTML = "";


const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const trHead = document.createElement('tr');
const passenger = document.createElement('th');
passenger.textContent = 'Passenger';
// const id = document.createElement('th');
// id.textContent = 'ID';
const name = document.createElement('th');
name.textContent = 'Name';
const birthDate = document.createElement('th');
birthDate.textContent = 'Birth Date';
const amount = document.createElement('th');
amount.textContent = 'Amount';

trHead.appendChild(passenger);
// trHead.appendChild(id);
trHead.appendChild(name);
trHead.appendChild(birthDate);
trHead.appendChild(amount);

thead.appendChild(trHead);

  passData.forEach((passenger, index) => {
  const trBody = document.createElement('tr');

  const passengerCell = document.createElement('td');
  passengerCell.textContent = `Passenger ${index + 1}`;
  trBody.appendChild(passengerCell);

  // const idCell = document.createElement('td');
  // idCell.textContent = passenger.paxid;
  // trBody.appendChild(idCell);

  const nameCell = document.createElement('td');
  nameCell.textContent = passenger.paxname;
  trBody.appendChild(nameCell);

  const birthDateCell = document.createElement('td');
  birthDateCell.textContent = passenger.paxbirthdate;
  trBody.appendChild(birthDateCell);

  const amountCell = document.createElement('td');
  amountCell.textContent = passenger.amount;
  trBody.appendChild(amountCell);

  tbody.appendChild(trBody);
});

table.appendChild(thead);
table.appendChild(tbody);
ptable.appendChild(table);


  }, [passData]);

  const handleSubmit = (event) => {

    event.preventDefault();
    const passengerData = {
      paxid,
      paxname,
      paxbirthdate,
      paxtype,
      amount,
      passbookingid ,
      passcustomerid

    };
    console.log(passengerData);
    setPassData([...passData, passengerData]);

    props.updatePass(passengerData);
   
    setpaxname('');
    setpaxbirthdate('');
    setpaxtype('singlePersonCost');
  };

var curr = new Date();
curr.setDate(curr.getDate() - 1);
var today = curr.toISOString().substring(0,10);

  return (
    <div  style={{
                background: "#ddd",
                color: "#4e1010",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "4px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                marginTop: "6vh",

                marginBottom : "6vh"
              }}>
    <form onSubmit={handleSubmit}>
      <label>
        paxname:
        <input type="text" value={paxname} onChange={(event) => setpaxname(event.target.value)} />
      </label>
      <br/>
      <br/>
      <label>
        paxbirthdate:
        <input 
    type="date" 
    value={paxbirthdate} 
    onChange={(event) => setpaxbirthdate(event.target.value)}
    max={today}
  />
        {/* <input type="date" value={paxbirthdate} onChange={(event) => setpaxbirthdate(event.target.value)} /> */}
      </label>
      <br/>
      <br/>
      <div>
        <label>Passenger Type</label>
        <br/><br/>
        <label>
          <input type="radio" paxname="paxtype" value="singlePersonCost" checked={paxtype === 'singlePersonCost'} onChange={() => {setpaxtype('singlePersonCost'); setAmount(itineraries[0].singlepersoncost)}} />
          Single person cost : {itineraries[0].singlepersoncost}
        </label>
      </div>
      <div>
        <label>
          <input type="radio" paxname="paxtype" value="extraPersonCost" checked={paxtype === 'extraPersonCost'} onChange={() =>{ setpaxtype('extraPersonCost'); setAmount(itineraries[0].extrapersoncost)}} />
          Extra person cost : {itineraries[0].extrapersoncost}
        </label>
      </div>
      <div>
        <label>
          <input type="radio" paxname="paxtype" value="childWithBed" checked={paxtype === 'childWithBed'} onChange={() => {setpaxtype('childWithBed'); setAmount(itineraries[0].childwithbed)}} />
          Child with bed  : {itineraries[0].childwithbed}
        </label>
      </div>
      <div>
        <label>
          <input type="radio" paxname="paxtype" value="childWithoutBed" checked={paxtype === 'childWithoutBed'} onChange={() => {setpaxtype('childWithoutBed'); setAmount(itineraries[0].childwithoutbed)}} />
          Child without bed : {itineraries[0].childwithoutbed}
        </label>
      </div>
      <button type="submit" style={{marginBottom: "10px", marginTop: "10px", marginLeft: "20px"}}>Add Another Passenger</button>
      

      <div class="table-responsive">
     <table id="results-table" class="table table-bordered table-hover"></table> 
    </div>

    </form>
    </div>
  );
}

export default PassengerForm;
