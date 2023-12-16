import Grid from '@mui/material/Grid'
import AddressCard from '../AddressCard/AddressCard'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { Form } from 'react-router-dom';
import TextField from '@mui/material/TextField'



const DeliveryAddressForm = () => {
    return (
        <div>

            <Grid container spacing={4} alignItems="top" justifyContent="center">
                <Grid xs={12} lg={5} className='border shadow-sm' p={"1rem"} >
                    <AddressCard />
                    <Button sx={{ mt: "1rem" }} variant="contained" >
                        Deliver Here
                    </Button>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className=" border rounded-sm shadow-sm p-5">
                        <Form>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="firstName"
                                        label="First Name"
                                        name='firstName'
                                        fullWidth
                                        autoComplete='givenName'
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        label="Last Name"
                                        name='lastName'
                                        fullWidth
                                        autoComplete='givenName'
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        required
                                        id="address"
                                        label="Address"
                                        name='address'
                                        fullWidth
                                        autoComplete='givenName'
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        label="city"
                                        name='city'
                                        fullWidth
                                        autoComplete='givenName'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        label="State/Province/Region"
                                        name='state'
                                        fullWidth
                                        autoComplete='givenName'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        label="Zip"
                                        name='zip'
                                        fullWidth
                                        autoComplete='givenName'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField

                                        required
                                        id="phoneNumber"
                                        label="Phone Number"
                                        name='phoneNumber'
                                        fullWidth
                                        autoComplete='givenName'
                                    />
                                </Grid>

                            </Grid>
                            <Button sx={{ mt: "1rem" }} variant="contained" >
                                Deliver Here
                            </Button>
                        </Form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm