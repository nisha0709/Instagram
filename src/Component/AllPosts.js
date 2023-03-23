import { Grid, Box, ImageListItem } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import styled from "@emotion/styled";

function AllPosts() {
  const arrayOfObjImage = [
    {
      image:
        "https://th.bing.com/th/id/OIP.M2SujemyQcZBiLUPZylJRwHaEo?w=290&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.ssZfUI8_yehzacZnKlhY0QHaEo?w=243&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.u-vO5hfjswtfuf2b7RkyUwHaLH?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.6o80LJK5U2GY1SnHeU7SIgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.7proQZL6X9NiNO0rh-GH6wHaEo?w=288&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.vT11wjxWdLUy5Lfom6dz6wHaEo?w=311&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.CPT6fnscapjsy-Xnjx6JOwHaFz?w=251&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.m2YZ2vQ393Emx-6RQfbAGgHaFj?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.63o4yHc_o3vXRXzUE3fWdgHaFj?w=211&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  ];
  const BoxContent = styled(Box)(({theme})=>({
    width: "100%",
    height: "300px",
    
    opacity: "0",
    color: "white",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    background: "rgba(0,0,0,0.6)",
    transition: "0.3s all linear",
    "&:hover": {
      opacity: 1,
    },
    
  }))

  const ImageTag = styled("img")({
    width: "100%",
    height: "300px",
    
    position: "relative",
  });
  return (
   
      <Grid container spacing={3}  marginTop="0px">
        {arrayOfObjImage.map((e) => {
          return (
            <Grid item xs={4}>
              <>
                <ImageListItem>
                  <ImageTag src={e.image} />
                  <BoxContent>
                    <Box>
                      <FavoriteIcon /> 200
                    </Box>
                    <Box>
                      <ChatBubbleRoundedIcon />
                      32
                    </Box>
                  </BoxContent>
                </ImageListItem>
              </>
            </Grid>
          );
        })}
      </Grid>
   
  );
}

export default AllPosts;
