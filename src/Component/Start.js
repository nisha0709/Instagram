import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Profile from "./Profile";
import { Grid,  createTheme, CssBaseline } from "@mui/material";


const StartComponent = (props) => {
  const {changeTheme}=props
 
  const theme = createTheme({
    overides: {
      MuiButton: {
        contained: {
          backgroundColor: "black",
          color:"white"
        },
      },
    },
    palette: {
      mode: "dark",
     
    },
  });
  return (
    <>
     
        <Grid container >
        <CssBaseline />
        <Grid item xs={12}>

        <Navbar changeTheme={changeTheme} sx={{display:{
          xs:"none",sm:"block"
        }}}/>
        </Grid>
          <Grid item xs={2} style={{ marginTop: "16px" }} sx={{display:{
            xs:"none",sm:"none",lg:"block"
          }}}>
            <SideBar  />
          </Grid>
          <Grid item xs={10}>
            <Profile />
          </Grid>
        </Grid>
     
    </>
  );
};

export default StartComponent;
