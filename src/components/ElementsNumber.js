import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ElementsNumber = ({ isLoading, tags, pageSize, handleElementChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Size</InputLabel>
      <Select
        labelId="select-label"
        id="simple-select"
        value={pageSize}
        label="Size"
        onChange={handleElementChange}
        disabled={isLoading || tags.length === 0}
      >
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={60}>60</MenuItem>
        <MenuItem value={90}>90</MenuItem>
      </Select>
    </FormControl>
  );
};

ElementsNumber.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  pageSize: PropTypes.oneOf([15, 30, 60, 90]).isRequired,
  handleElementChange: PropTypes.func.isRequired
};

export default ElementsNumber;
