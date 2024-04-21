// import React, { useState } from 'react';

// const handleAddPassenger = () => {
//     // code to add passenger to database or list of passengers
//     console.log('Passenger added!');

//     const newPassenger = {
//       name,
//       birthdate: '',
//       radioButton: '',
//     };
//     setPassengers([...passengers, newPassenger]);
//     setName('');
//     console.log('Passenger addedsfhdth!');

//     const handleNameChange = (index, value) => {
//       const newPassengers = [...passengers];
//       newPassengers[index].name = value;
//       setPassengers(newPassengers);
//     };
  
//     const handleBirthdateChange = (index, value) => {
//       const newPassengers = [...passengers];
//       newPassengers[index].birthdate = value;
//       setPassengers(newPassengers);
//     };
  
//     const handleRadioButtonChange = (index, value) => {
//       const newPassengers = [...passengers];
//       newPassengers[index].radioButton = value;
//       setPassengers(newPassengers);
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       // code to submit form data to server or handle validation
//       console.log('Form submitted!');
//     };
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           </label>
//           <br />
//           <button type="button" onClick={handleAddPassenger}>Add Passenger</button>
//           <button type="submit">Done</button>
//         </form>
  
//         {passengers.map((passenger, index) => (
//           <div key={index}>
//             <h2>Passenger {index + 1}</h2>
//             <label>
//               Name:
//               <input type="text" value={passenger.name} onChange={(e) => handleNameChange(index, e.target.value)} />
//             </label>
//             <br />
//             <label>
//               Birthdate:
//               <input type="date" value={passenger.birthdate} onChange={(e) => handleBirthdateChange(index, e.target.value)} />
//             </label>
//             <br />
//             <label>
//               Radio Button:
//               <br />
//               <input type="radio" name={`radioButton-${index}`} value="option1" checked={passenger.radioButton === 'option1'} onChange={() => handleRadioButtonChange(index, 'option1')} />
//               Option 1
//               <br />
//               <input type="radio" name={`radioButton-${index}`} value="option2" checked={passenger.radioButton === 'option2'} onChange={() => handleRadioButtonChange(index, 'option2')} />
//               Option 2
//               <br />
//               <input type="radio" name={`radioButton-${index}`} value="option3" checked={passenger.radioButton === 'option3'} onChange={() => handleRadioButtonChange(index, 'option3')} />
//               Option 3
//               <br />
//               </label>
//               </div>
//         ))
//   };
//   </div>
//     )
// }
  