import React from 'react';
import{Stack, Box} from "@mui/material"
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loading from './Loading';

const Videos = ({ videoss, direction , justify}) => {

  if(!videoss?.length) return <Loading />;
  // if(!videoss?.length) return 'loading...';

    // console.log(videoss);
  return (
    <Stack direction={direction ||"row"} flexWrap="wrap" sx={{justifyContent:{xs:"center",sm:"center", md:"start"}}} gap={2}>
    {videoss.map((item,idx)=>(
      <Box key={idx}>
      {item.id.videoId && <VideoCard video={item}/>}
      {item.id.channelId && <ChannelCard channelDetail={item}/>}

      </Box>
    ))}
    </Stack>
  )
}

export default Videos