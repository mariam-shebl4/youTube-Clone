import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import{useParams} from 'react-router-dom'
import Videos from "./Videos.jsx";
import { FitchfromApi } from '../utils/FitchfromApi.js'
const SearchFeed = () => {


  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    FitchfromApi(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm])




  return (
    <Box p={12} sx={{ overflowY: 'auto', height: '90vh'}} >
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for  <span style={{ color: '#6f75c7' }} >{searchTerm}</span> videos
      </Typography>
     <Box  sx={{justifyContent:"center", alignItems:"center", margin:{xs:'1vh 5vh'}}} display="flex">
      <Videos videoss={videos} />

     </Box>
    </Box>
  )
}

export default SearchFeed