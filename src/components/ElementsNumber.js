import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';

const ElementsNumber = () => {
  const isLoading = useStoreState(state => state.isLoading);
  const tags = useStoreState(state => state.tags);
  const pageSize = useStoreState(state => state.pageSize);
  const setPageSize = useStoreActions(actions => actions.setPageSize);
  const getTags = useStoreActions(actions => actions.getTags);

  const handleChange = event => {
    setPageSize(event.target.value);
    getTags();
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Size</InputLabel>
      <Select
        labelId="select-label"
        id="simple-select"
        value={pageSize}
        label="Size"
        onChange={handleChange}
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

export default ElementsNumber;
