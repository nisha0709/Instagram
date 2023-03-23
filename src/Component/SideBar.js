import React from "react";
import {Grid ,Box } from "@mui/material";
import { memo } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import styled from "@emotion/styled";

function SideBar() {
  const arrayOfObj = [
    {
      icon: <HomeIcon />,
      name: <span>Home</span>,
    },
    {
      icon: <SearchIcon />,
      name: <span>Search</span>,
    },
    {
      icon: <ExploreIcon />,
      name: <span>Explore</span>,
    },
    {
      icon: <SlowMotionVideoIcon />,
      name: <span>Reels</span>,
    },
    {
      icon: <MapsUgcOutlinedIcon />,
      name: <span>Messages</span>,
    },
    {
      icon: <FavoriteBorderOutlinedIcon />,
      name: <span>Notifications</span>,
    },
    {
      icon: <AddBoxOutlinedIcon />,
      name: <span>Create</span>,
    },
    {
      icon: <PanoramaFishEyeIcon />,
      name: <span>Profile</span>,
    },
  ];
  const BoxParent = styled(Box)({
    textAlign: "left",
    marginTop: "20px",
    marginLeft: "10px",
  });
  const GridContainer = styled(Grid)({
    height: "135vh",
    position: "sticky",
    top: "0",
    borderRight: "1px solid lightgrey",
  });

  console.log("sidebar");
  return (
    <GridContainer container lg={12}>
      <BoxParent>
        {arrayOfObj.map((e) => {
          return (
            <Grid
              item
              lg={12}
              container
              p={0.5}
              m={0.5}
              style={{ marginTop: "18px" }}
            >
              <Grid item>{e.icon}</Grid>
              <Grid item marginLeft="10px">
                {" "}
                {e.name}
              </Grid>
            </Grid>
          );
        })}
      </BoxParent>
    </GridContainer>
  );
}

export default memo(SideBar);
