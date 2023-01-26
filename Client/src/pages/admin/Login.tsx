import { Box, Container, Paper, TextField, Typography, useTheme,Checkbox,FormControlLabel, Button} from '@mui/material'
import Logo from "../../assets/img/Savant.svg"
import React from 'react'

export default function AdminLogin() {
  const theme = useTheme()
  
  
  return (
    <Box sx={{ height: "100%", display: "flex" , justifyContent: "center", alignItems: "center" ,bgcolor:"#f3f3f3"}}>
      <Container>
        <Box sx={{ display:"flex", justifyContent: "center", alignItems:"center" , gap: theme.spacing(6), flexDirection:"column", width: "100%" }}>
          <img src={Logo} alt="Logo" />
            <Paper elevation={2} sx={{ padding: theme.spacing(4), maxWidth: "620px", width: "100%"   }}>
              <Typography variant="h5" component="h1">Admin Sign In</Typography>
                <form action="" style={{ width:"100%" }}>
                  <Box sx={{ marginTop: theme.spacing(4), display:"flex", justifyContent: "center", alignItems:"center" , gap: theme.spacing(2), flexDirection:"column" }}>
                      <TextField type={"email"} required label="Email" variant="outlined" fullWidth />
                      <TextField type={"password"} required label="Password" variant="outlined" fullWidth />
                      <Box sx={{ width: "100%" }}>
                        <FormControlLabel control={<Checkbox />} label="Remember Me" />
                      </Box>
                      <Button variant='contained' size='large' type='submit' fullWidth >Hello</Button>

                  </Box>
                </form>
            </Paper>
        </Box>
      </Container>

    </Box>

  )
}
