import * as React from 'react';
import Slider from '@mui/material/Slider';

export default function InputSlider({ value, onChange }) {
  return (
    <Slider
      size="small"
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      aria-label="Volume"
      valueLabelDisplay="auto"
      color="secondary"
    />
  );
}