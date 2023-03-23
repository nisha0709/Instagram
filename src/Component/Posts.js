import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import GridOnIcon from '@mui/icons-material/GridOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Grid } from "@mui/material";
import AllPosts from "./AllPosts";

export default function Posts() {
  const [value, setValue] = useState(0);
  const arrOfText = [
    {
        icon:<GridOnIcon/>,
      name: "POSTS",
    },
    {
        icon:<SlowMotionVideoIcon/>,
      name: "REELS",
    },
    {
        icon:<MenuBookIcon/>,
      name: "GUIDES",
    },
    {
        icon:<AccountBoxIcon/>,
      name: "TAGED",
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container   style={{justifyContent: "center",width:"100%"}}>

    <Tabs
      value={value}
      onChange={handleChange}

    >
      {arrOfText.map((e) => {
        return <Tab icon={e.icon} iconPosition="start" label={e.name} />;
      })}
    </Tabs>
    </Grid>
    
  );
}
