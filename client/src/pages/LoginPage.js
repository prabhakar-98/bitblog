import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";


export default function LoginPage() {
  
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
   const handleSubmit =  async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
     const  username= data.get('email');
     const password=data.get('password') ;
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div>
       
    <Container component="main" maxWidth="lg">
 <Box
   sx={{
     marginTop: 8,
   }}
 >
   <Grid container>
     <CssBaseline />
     <Grid
       item
       xs={false}
       sm={4}
       md={7}
       sx={{
         backgroundImage: "url(https://images.collegedunia.com/public/college_data/images/campusimage/1507625417cachajdk.jpg)",
         backgroundRepeat: "no-repeat",
         backgroundColor: (t) =>
           t.palette.mode === "light"
             ? t.palette.grey[50]
             : t.palette.grey[900],
         backgroundSize: "cover",
         backgroundPosition: "center",
       }}
     />
     <Grid
       item
       xs={12}
       sm={8}
       md={5}
       component={Paper}
       elevation={6}
       square
     >
       <Box
         sx={{
           my: 8,
           mx: 4,
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
         }}
       >
         <Typography component="h1" variant="h5">
           Sign in
         </Typography>
         <Box
           component="form"
           noValidate
           onSubmit={handleSubmit}
           sx={{ mt: 1 }}
         >
           <TextField
             margin="normal"
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoComplete="email"
             autoFocus
           />
           <TextField
             margin="normal"
             required
             fullWidth
             name="password"
             label="Password"
             type="password"
             id="password"
             autoComplete="current-password"
           />
           <FormControlLabel
             control={<Checkbox value="remember" color="primary" />}
             label="Remember me"
           />
           <Button
             type="submit"
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 }}
           >
             Sign In
           </Button>
           <Grid container>
             <Grid item xs>
               <Link href="#" variant="body2">
                 Forgot password?
               </Link>
             </Grid>
             <Grid item>
               
             </Grid>
           </Grid>
         </Box>
       </Box>
     </Grid>
   </Grid>
 </Box>
</Container>
 

</div>
  );
}