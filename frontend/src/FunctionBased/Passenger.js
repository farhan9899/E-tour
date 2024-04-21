import { useState } from 'react';
import { FormGroup, FormControl, Input, InputLabel, Typography, styled, Button } from '@mui/material'

import Nav from 'react-bootstrap/Nav';
import { useNavigate} from 'react-router-dom';
const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div{
    margin-top:20px
} 
`
const Passenger = () => {
    
    return (
        <Container>
            <Typography variant="h4">Add Passenger</Typography>
            <FormControl>
                <InputLabel>Pax_name</InputLabel>
                <Input  name="Pax_name" />
            </FormControl>
            <FormControl>
                <InputLabel>Pax_Birthdate</InputLabel>
                <Input name="userName" />
            </FormControl>
            <FormControl>
                <InputLabel>Pax_Type</InputLabel>
                <Input name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Pax_amount</InputLabel>
                <Input name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" ><Nav.Link href="/bookingPage">Submit</Nav.Link></Button>
            </FormControl>

        </Container>
    )
}
export default Passenger;