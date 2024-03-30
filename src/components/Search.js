import { TextField } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import debounce from 'lodash.debounce';
import React, { useRef } from 'react';

const Search = () => {
  const isLoading = useStoreState(state => state.isLoading);
  const search = useStoreState(state => state.search);
  const setSearch = useStoreActions(actions => actions.setSearch);
  const setPage = useStoreActions(actions => actions.setPage);
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
    setPage(1);
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
      disabled={isLoading}
    />
  );
};

export default Search;
