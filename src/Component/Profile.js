import React from "react";
import { memo } from "react";
import { Grid } from "@mui/material";
import Highlights from "./Highlights";
import Posts from "./Posts";
import AllPosts from "./AllPosts";
import styled from "@emotion/styled";
import ProfileDetails from "./ProfileDetails";

function Profile() {
  console.log("profile");
  const GridComponent = styled(Grid)({
    height: "300px",
    width:"100%",
    marginTop: "30px",
  });
  return (
    <>
      <GridComponent container>
        <Grid item xs={12}>
          <ProfileDetails />
        </Grid>
        <Grid item xs={12}>
        <Highlights />
        </Grid>
        <Grid item xs={12}>
        <Posts />
        </Grid>
        <Grid item xs={12}>
        <AllPosts />
        </Grid>
      </GridComponent>
    </>
  );
}

export default memo(Profile);
