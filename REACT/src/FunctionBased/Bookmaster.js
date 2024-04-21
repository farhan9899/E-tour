import { useEffect } from "react";

export default function Bookmaster() {

  useEffect(() => {
    const token = sessionStorage.getItem('token'); // Get JWT token from sessionStorage
    fetch('http://localhost:8080/api/admin/showbookings', {
      headers: {
        'Authorization': `Bearer ${token}` // Pass JWT token as 'Authorization' header
      }
    })
    .then(response => console.log(response))
    .then(result => {
      // Do something with the result
    })
    .catch(error => {
      // Handle the error
    });
  }, []);

  return (
    <div>
      // Your component JSX goes here
    </div>
  );
}
