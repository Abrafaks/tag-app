import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect } from 'react';

const SortBy = () => {
  const sort = useStoreState(state => state.sort);
  const setSort = useStoreActions(actions => actions.setSort);
  const getTags = useStoreActions(actions => actions.getTags);

  const handleSort = (event, newSort) => {
    if (newSort) {
      setSort(newSort);
    }
  };

  useEffect(() => {
    getTags();
  }, [sort]);

  return (
    <ToggleButtonGroup value={sort} exclusive onChange={handleSort} fullWidth sx={{ padding: 0 }}>
      <ToggleButton value="popular">Popular</ToggleButton>
      <ToggleButton value="name">Name</ToggleButton>
      <ToggleButton value="activity">Activity</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SortBy;
