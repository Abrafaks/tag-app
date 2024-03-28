import { TextField } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import debounce from 'lodash.debounce';
import React, { useRef } from 'react';

const Search = () => {
  const search = useStoreState(state => state.search);
  const setSearch = useStoreActions(actions => actions.setSearch);
  const getTags = useStoreActions(actions => actions.getTags);

  const debouncedGetTags = useRef(
    debounce(value => {
      console.log('getting results');
      getTags(value);
    }, 750)
  ).current;

  const handleInputChange = event => {
    const value = event.target.value;
    setSearch(value);
    debouncedGetTags(value);
  };

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

export default Search;
