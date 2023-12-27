
import { Grid,TextField,Button } from '@mui/material'
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget)

    const userData = {

      email: data.get('email'),
      password: data.get('password'),

    }
    console.log(userData);
  }

  return (

    <div >
      <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>

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
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="form-footer flex gap-1 align-middle justify-center mt-3">
        <p>{`If you don't have account?`}</p>
        <Button onClick={()=>navigate("/register")} variant="text" color="primary" className=" font-semibold" sx={{ p: 0 }}  >

          Register</Button>
      </div>
    </div>
  )
}

export default LoginForm