import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import Feed from './components/Feed';



const App=()=> 
   (
 
      
      <BrowserRouter>
        <Box sx={{ backgroundColor:"#131a40" }}>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetail/>}/>
            <Route path='/channel/:id' element={<ChannelDetail/>}/>
            <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
  
  );


export default App;
