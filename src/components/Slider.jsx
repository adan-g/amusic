import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function InputSlider({ value, onChange }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        size="small"
        value={value}
        onChange={(event, newValue) => onChange(newValue)}
        aria-label="Volume"
        valueLabelDisplay="auto"
        color="success"
      />
    </Box>
  );
}