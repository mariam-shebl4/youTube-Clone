import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";
import { FitchfromApi } from "../utils/FitchfromApi.js";
import Loading from './Loading';
const VideoDetail = () => {
  const [videoDetaill, setVideoDetaill] = useState(null);
const [videos, setVideos]=useState(null)

  // console.log(videoDetaill);
  const { id } = useParams();

  useEffect(() => {
    FitchfromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>setVideoDetaill(data.items[0]));
    FitchfromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>setVideos(data.items));
  }, [id]);

  if (!videoDetaill?.snippet) return (
  <Loading />
  );
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetaill;
  return (
    
    <Box Height="100%" direction="row" >
      <Stack direction={{ xs: "column", md: "row" }} sx={{top: "86px" }}>
        <Box flex={1} >
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            
            />
            <Typography variant="h5" color="#fff" pl={{xs:2, md:2}}>
              {title}
            </Typography>
            <Stack
              direction="column"
              pl={{xs:2, md:2}}
              sx={{ color: "#fff" }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="white"
                >
                  {channelTitle}
                  <CheckCircleIcon sx={{fontSize:20, color:'#039be5', ml: '5px',}}/>
                </Typography>
              </Link>
              <Stack direction="row" gap="10px" >
                <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>


            </Stack>
          </Box>
        </Box>

      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
      <Videos videoss={videos} direction="column"/>

      </Box>
      </Stack>




    </Box>
  );
};

export default VideoDetail;
