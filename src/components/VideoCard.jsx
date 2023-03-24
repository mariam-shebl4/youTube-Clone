import React from 'react';
import{Link} from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoProfilePicture} from '../utils/Constants'


const VideoCard = ({ video:{id: {videoId}, snippet} }) => {
    // console.log(videoId, snippet)
   
  return (
    <Card sx={{width: {md:'350px', xs:'50vh', sm:'50vh'}, boxShadow:'none', backgroundColor:'#183a77', borderRadius: ' 16px'}}>
        <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:"100%", height:180, borderRadius: '0px 0px 16px 16px'}} />
        </Link>
        <CardContent sx={{backgroundColor:'#183a77', minheight:'5rem', color:"white"}}>
            <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="white" >
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="italic" color="#c5c5c5d3" sx={{display:"flex"}} >
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircleIcon sx={{fontSize:20, color:'#039be5', ml: '5px',}}/>
                </Typography>
            
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard