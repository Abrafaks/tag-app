import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';

const SortBy = () => {
  const isLoading = useStoreState(state => state.isLoading);
  const tags = useStoreState(state => state.tags);
  const sort = useStoreState(state => state.sort);
  const setSort = useStoreActions(actions => actions.setSort);
  const getTags = useStoreActions(actions => actions.getTags);

  const handleSort = (event, newSort) => {
    if (newSort) {
      setSort(newSort);
      getTags();
    }
  };

  return (
    <ToggleButtonGroup
      value={sort}
      exclusive
      onChange={handleSort}
      fullWidth
      disabled={isLoading || tags.length === 0}
    >
      <ToggleButton value="popular">Popular</ToggleButton>
      <ToggleButton value="name">Name</ToggleButton>
      <ToggleButton value="activity">Activity</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SortBy;
