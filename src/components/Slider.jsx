import * as React from 'react';
import Slider from '@mui/material/Slider';



export default function InputSlider({ className, ...props }) {

  return (
    <div className={className}>
      <Slider
        sx={{
          color: '#f0f9fe',
          '& .MuiSlider-rail': {
            backgroundColor: '#f0f9fe',
          },
          '& .MuiSlider-thumb': {
            backgroundColor: '#f0f9fe',
          },
        }}
        {...props}
      />
    </div>
  );
}