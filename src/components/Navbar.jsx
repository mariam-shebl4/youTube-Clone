import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../utils/Constants";
import Searchbar from "./Searchbar.jsx";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#00001b",
      top: "0",
      justifyContent: "space-between",
      width: "100%",
    }}
  >
    <Link to="/">
      <img src={logo} alt="logo" height={45}/>
    </Link>
    <Searchbar/>
  </Stack>
);

export default Navbar;
