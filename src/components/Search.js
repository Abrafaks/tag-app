import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Search = ({ search, handleInputChange }) => {
  return (
    <TextField
      id="outlined-basic"
      label="search tags"
      variant="outlined"
      value={search}
      onChange={handleInputChange}
      fullWidth
    />
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Search;
