import React , {useState}from 'react'
import { useNavigate } from 'react-router-dom';
import {Search} from '@mui/icons-material';
import {Paper, IconButton} from '@mui/material';
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
  return (
    <Paper
    component="form"
    onSubmit={onhandleSubmit}
    sx={{
      borderBottom:"2px inset #72004e",
      
      // border:'1px solid #4c0303',
      pl:2,
      boxShadow: 'none',
      background:"transparent",
      mr: { sm:5 },
     
    }}
    >
      <input
        className="search-bar"
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{p:'10px', color:'#72004e'}}>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default Searchbar