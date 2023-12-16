import Grid from '@mui/material/Grid'
import AddressCard from '../AddressCard/AddressCard'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

import { Form } from 'react-router-dom';
import TextField from '@mui/material/TextField'






const DeliveryAddressForm = () => {
    return (
        <div>

            <Grid container spacing={4}>
                <Grid className=' border shadow-sm'>
                    <AddressCard />
                    <Button variant="contained" >
                        Deliver Here
                    </Button>
                </Grid>
                <Grid item >
                    <Box className=" border rounded-sm shadow-sm">
                        <Form>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <TextField
                                        id="firstName"
                                        label="First Name"
                                        name='firstName'
                                        fullWidth
                                        autoComplete='givenName'


                                    />
                                </Grid>

                            </Grid>
                        </Form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm