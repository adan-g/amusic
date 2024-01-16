import * as React from 'react';
import Slider from '@mui/material/Slider';



export default function InputSlider({ ...props }) {
  return (
    
    <Slider
    
      sx={{
        color: '#f0f9fe', // Replace 'your_color_here' with the desired color
        '& .MuiSlider-rail': {
          backgroundColor: '#f0f9fe', // Replace 'rail_color_here' with the desired rail color
        },
        '& .MuiSlider-thumb': {
          backgroundColor: '#f0f9fe', // Replace 'thumb_color_here' with the desired thumb color
        },
      }}
      {...props}
    />
  );
}