import React from "react";
import { Grid, Box, Button, createTheme } from "@mui/material";
import { styled } from "@mui/system";

function Navbar(props) {
  const { changeTheme } = props;

  console.log("navbar");
  const theme = createTheme({
    overides: {
      MuiButton: {
        contained: {
          backgroundColor: "white",
        },
      },
    },
  });
  const BoxOutlet = styled(Box)(({theme})=>({
    color: "black",
    fontSize: "20px",
    padding: "15px",
    marginLeft: "20px",
    [theme.breakpoints.up("xs")]:{
      
      padding:"0px"
    }
  }));
  const Input = styled("input")(({ theme }) =>({
    height: "35px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
    display:"none"
      
    },
  }));
  const GridParent = styled(Grid)(({ theme }) => ({
    borderBottom: "1px solid lightgrey",
    // width:"100%",
    marginTop:"20px",
    height: "85px",
    position: "sticky",
    top: "0",
    zIndex: "1",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      
    },
  }));

  const BoxImage = styled("img")(({ theme }) => ({
    height: "300px",
    width: "300px",
    color: "black",
    [theme.breakpoints.up("xs")]: {
      width: "121px",
      height: "50px"
    },
  }));
  return (
    <>
      <GridParent container spacing={2}>
        <Grid item xs={4} p={5}>
          <BoxOutlet>
            <BoxImage src="	https://www.bypeterandpauls.com/images/instagram-img.png" />
          </BoxOutlet>
        </Grid>
        <Grid item>
          <BoxOutlet>
            <Input placeholder="search" className="input" />
          </BoxOutlet>
        </Grid>
        <Grid item>
          <BoxOutlet>
            <Button
              variant="outlined"
              size="small"
              onClick={() => changeTheme()}
            >
              Change Theme
            </Button>
          </BoxOutlet>
        </Grid>
      </GridParent>
    </>
  );
}

export default Navbar;
