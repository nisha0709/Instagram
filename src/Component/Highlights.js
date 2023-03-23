import React from "react";
import { Grid, Box, Container } from "@mui/material";
import styled from "@emotion/styled";

function Highlights() {
  const arrOfImg = [
    {
      image:
        "https://th.bing.com/th/id/OIP.U3moaYgG6UlXFzQc4xjZxgHaEo?w=307&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "Sunset",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.8Qv9BmqeYXQ5gZFF60kFdgHaFw?w=229&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "Butterflies",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.fn-EvnT6F4MG3Ki5cE8FKgHaFj?w=215&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "Birds",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.r4I2abQvGMup_fx42SU5egHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "Dogs",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.B30vSxgX3sZJsojazm0dEAHaEo?w=259&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "River",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.-HNQsernshM_DXsJS9W8hwHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "Mountains",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.S3K2SYkm7D5pP9nJNIYIQQHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      name: "Flowers",
    },
  ];
  const GridParent = styled(Grid)(({theme})=>({
    height: "230px",
    borderBottom: "1px solid lightgrey",
    display: "flex",
    marginLeft: "0px",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]:{
      width: "100%",
    }
  }))

  const GridChild = styled(Grid)(({theme})=>({
    display: "flex",
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]:{
     width:"100%"
    },[theme.breakpoints.down("md")]:{
      height:"70%"
    },[theme.breakpoints.down("lg")]:{
      height:"100%",
      
    }
  }))
  const ImageDiv = styled("img")(({theme})=>({
    width: "70%",
    height: "85px",
    borderRadius: "50%",
    marginTop:"20px",
    marginBottom: "15px",
    [theme.breakpoints.down("md")]:{
      height:"50px",
      
    }
  }))
  return (
    <>
      <GridParent container xs={12} spacing={3}>
        {arrOfImg.map((e) => {
          return (
            <>
              <GridChild item xs={1.6} height="100%">
                <ImageDiv src={e.image} />
                {e.name}
              </GridChild>
            </>

          );
        })}
      </GridParent>
    </>
  );
}

export default Highlights;
