import { Grid, TextField, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget)

    const userData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),

    }
    console.log(userData);
  }

  return (
    <div >
      <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} >
            <TextField
              id="firstName"
              label="First Name"
              required
              name="firstName"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField
              id="lastName"
              label="Last Name"
              required
              name="lastName"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              id="email"
              label="Email"
              required
              name="email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              id="password"
              label="Password"
              required
              name="password"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} >
            <Button type="submit" className=" w-full " variant="contained" color="primary" size="large">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="form-footer flex gap-1 align-middle justify-center mt-3">
        <p>Already have an account?</p>
        <Button onClick={()=>navigate("/login")} variant="text" color="primary" className=" font-semibold" sx={{ p: 0 }}  >

          Login</Button>
      </div>
    </div>
  )
}

export default RegisterForm