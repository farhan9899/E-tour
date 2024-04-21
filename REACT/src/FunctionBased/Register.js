import React, {useState,setState} from 'react';
import '../MyFiles/style.css'
function Register() {
    
    const [firstName, setFirstName] = useState(null);
    const [PhoneNumber, setPhoneNumber] = useState(null);
    const [CountryCode, setCountryCode] = useState(null);
    const [Address, setAddress] = useState(null);
    const [ProofId, setProofId] = useState(null);
    const [Gender, setGender] = useState(null);
    const [Age, setAge] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "CountryCode"){
            setCountryCode(value);
        }
        if(id === "PhoneNumber"){
            setPhoneNumber(value);
        }
        if(id === "Address"){
            setAddress(value);
        }
        if(id === "ProofId"){
            setProofId(value);
        }
        if(id === "Gender"){
            setGender(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "Age"){
            setAge(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit = async () => {
        
        if (!email.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/)) {
          alert('Please enter a valid email address.');
          return;
        }
        if (PhoneNumber.length < 8) {
            alert('Enter Valid Phone Number.');
            return;
          }
    
        if (password.length < 8) {
          alert('Password must be at least 8 characters long.');
          return;
        }
    
        if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return;
        }
    
        try {
          let res = await fetch("http://localhost:8080/api/Customer_Master", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
              customername:firstName,
              email: email,
              password:password,
              countrycode:CountryCode,
              phonenumber:PhoneNumber,
              address:Address,
              proofid:ProofId,
              gender:Gender,
              age:Age
            }),
          });
          let resJson = await res.json();
          if (res.status === 201 || res.status=== 200) {
           alert("User created successfully") 
           setFirstName("");
            setEmail("");
            setAddress("");
            setAge("");
            setCountryCode("");
        setGender("");
        setPassword("");
        setProofId("");
        setConfirmPassword("");
        setPhoneNumber("");
            setMessage("User created successfully");
            
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
    
    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="CountryCode">
                    <label className="form__label" for="CountryCode">Country Code </label>
                    <input  type="text" name="" id="CountryCode" value={CountryCode}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="CountryCode"/>
                </div>
                <div className="PhoneNumber">
                    <label className="form__label" for="PhoneNumber">Phone Number </label>
                    <input  type="text" name="" id="PhoneNumber" value={PhoneNumber}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="PhoneNumber"/>
                </div>
                <div className="Address">
                    <label className="form__label" for="Address">Address </label>
                    <input  type="text" name="" id="Address" value={Address}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Address"/>
                </div>
                <div className="ProofId">
                    <label className="form__label" for="ProofId">Proof Id </label>
                    <input  type="text" name="" id="ProofId" value={ProofId}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="ProofId"/>
                </div>
                <div className="Gender">
                    <label className="form__label" for="Gender">Gender </label>
                    <input  type="text" name="" id="Gender" value={Gender}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Gender"/>
                </div>
                <div className="Age">
                    <label className="form__label" for="Age">Age </label>
                    <input  type="text" name="" id="Age" value={Age}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Age"/>
                </div>
                <div className="password">
                    
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>

            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="Mybtn">Register</button>
            </div>
        </div>
       
    )       
}

export default Register