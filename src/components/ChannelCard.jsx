import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/Constants";

const ChannelCard = ({ channelDetail , marginTop}) => {
  console.log(channelDetail);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{md:'350px', xs:'250px'},
        height:'350px',
        margin:'auto',
        marginTop:marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
           <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircleIcon sx={{fontSize:20, color:'#039be5', ml: '5px',}}/>
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
