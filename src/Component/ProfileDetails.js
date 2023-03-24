import React, { useCallback, useState } from "react";
import { ButtonUnstyled } from "@mui/base";
import { Box, Button, Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import styled from "@emotion/styled";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

function ProfileDetails() {
  const arrObjOfData = {
    earth_of_nature: {
      dataName: "earth_of_nature",
      dataImg:
        "https://th.bing.com/th?q=Fascinating+Nature&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      dataQuote:
        "Look deep into nature,and then you will understand everything better.",
      posts: 66,
      followers: 229,
      following: 40,
    },
    natural_world: {
      dataName: "natural_world",
      dataImg:
        "https://th.bing.com/th/id/OIP.UYV_bihup-y039M8_Dk0KQHaFP?w=228&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      dataQuote: "Nature always wears the colors of the spirit.",
      posts: 123,
      followers: 590,
      following: 30,
    },
    world_around_us: {
      dataName: "world_around_us",
      dataImg:
        "https://th.bing.com/th/id/OIP.qVL9QNcb4iNHzBerI6D3YwHaEK?w=268&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      dataQuote: "If you truly love nature, you will find beauty everywhere.",
      posts: 86,
      followers: 659,
      following: 20,
    },
  };
  const [userName, setuserName] = useState(arrObjOfData.world_around_us);

  const changeName = useCallback(
    (e) => {
      setuserName(arrObjOfData[e.target.id]);
    },
    [userName]
  );
  const arrayOfName = ["earth_of_nature", "natural_world", "world_around_us"];

  const BoxMain = styled(Box)({
    height: "150px",
    borderRadius: "50%",
    width: "100%",
    marginLeft:"40px",
    position: "relative",
  });

  const GridParent = styled(Grid)(({ theme }) => ({
    paddingLeft: "40px",
    width: "100%",
    paddingTop: "40px",
    height: "220px",
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "0px",
      paddingTop: "0px",
    },
  }));
  const BoxItem = styled(Box)(({ theme }) => ({
    height: "200px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
    
    },
    [theme.breakpoints.down("md")]: {
      height: "250px",
      width: "100%",
    },
  }));
  const ImageTag = styled("img")(({ theme }) => ({
    borderRadius: "50%",
    width: "185px",
    top: "0px",
    right: "0px",
    left: "0px",
    position: "absolute",
    height: "190px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  }));
  const GridItem = styled(Grid)(({ theme }) => ({
    marginLeft: "40px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "40px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "40px",
    },
  }));
  const GridChildParent = styled(Grid)(({ theme }) => ({
  width:"100%",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "40px",
    },
  }));
  const GridChild=styled(Grid)({
    width:"100%",
    display:"flex",
    gap:"1px"
  })
  const BoxSwitch=styled(Box)(({ theme }) => ({
    marginTop: "24px",
    width:"33%",
    [theme.breakpoints.down("lg")]: {
     display:"none"
    },
  }));
  return (
    <>
      <Grid container>
        <GridParent item xs={12} sm={4}>
          <BoxMain>
            <ImageTag src={userName.dataImg} />
          </BoxMain>
        </GridParent>
        <GridChildParent item sm={4} lg={4}>
          <Grid container>
            <GridItem item>
              <BoxItem>
                {userName.dataName}
                <ButtonUnstyled className="buttonName">
                  Edit Profile
                </ButtonUnstyled>
                <ButtonUnstyled className="buttonName">
                  Share Profile
                </ButtonUnstyled>

                <Grid container m={1} spacing={1} xs={12}>
                  <GridChild item xs={4}>
                    <Box>
                      <b>{userName.posts}</b> posts
                    </Box>{" "}
                    <Box>
                      <b>{userName.followers}</b>Followers
                    </Box>
                    <Box>
                      <b>{userName.following}</b>Following
                    </Box>
                  </GridChild>
                  <Grid>
                    <Box>
                      <span>{userName.dataQuote} </span>
                    </Box>
                  </Grid>
                </Grid>
              </BoxItem>
            </GridItem>
          </Grid>
        </GridChildParent>
        <Grid item>
          <BoxSwitch >
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => {
                return (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      Switch
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      {arrayOfName.map((e) => {
                        return (
                          <MenuItem id={e} onClick={changeName}>
                            {e}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </React.Fragment>
                );
              }}
            </PopupState>
          </BoxSwitch>
        </Grid>
      </Grid>
    </>
  );
}

export default ProfileDetails;
