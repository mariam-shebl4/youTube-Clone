import React from 'react'
import {Stack} from '@mui/material';
import {categories} from '../utils/Constants'


const Sidebar = ({ selectedCategory , setSelectedCategory}) => {

// const selectedCategory ='New'




  return (
    <Stack direction="row" sx={{
        overflowY:"auto",
        height:{sx:'auto', md:'95%'}, flexDirection:{md:'column', sx:"row"},
        
    }}>
        {categories.map((category)=>(
            <button className='category-btn'
            onClick={() => setSelectedCategory(category.name)}
            style={{
                background: category.name === selectedCategory && '#3e406b'
            }}

            key={category.name}
            >
                <span style={{color: category.name === selectedCategory? "#ffff": "#6f75c7"}}>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        )        
        )}
    </Stack>
  )
}

export default Sidebar