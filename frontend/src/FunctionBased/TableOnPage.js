import { useEffect, useState } from "react";

export default function TableOnPage() {
  const customer = JSON.parse(sessionStorage.getItem("customer"));
  const [passenger, setPassenger] = useState([]);

  useEffect(() => {
    fetch("https:/localhost:7261/api/Passenger_Table/" + customer.cust_Id)
      .then((res) => res.json())
      .then((result) => {
        setPassenger(result);
      });
  }, [customer.cust_Id]);

  return (
    <div>
      {passenger.map((p) => (
        <form>
          <label>
            Passenger Id:
            <input type="text" value={p.pax_id} disabled />
          </label>
          <br />
          <label>
            Passenger Name:
            <input type="text" value={p.pax_Name} disabled />
          </label>
          <br />
          <label>
            Birthdate:
            <input type="text" value={p.pax_Birthdate} disabled />
          </label>
          <br />
          <label>
            Type:
            <input type="text" value={p.px_Type} disabled />
          </label>
          <br />
          <label>
            Amount:
            <input type="text" value={p.amount} disabled />
          </label>
          <br />
          <label>
            Departure Date:
            <input type="text" value={p.depart_date} disabled />
          </label>
        </form>
      ))}
    </div>
  );
}
