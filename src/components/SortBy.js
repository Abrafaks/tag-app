import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const SortBy = ({ isLoading, tags, sort, handleSort }) => {
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

SortBy.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  sort: PropTypes.oneOf(['popular', 'name', 'activity']).isRequired,
  handleSort: PropTypes.func.isRequired
};

export default SortBy;
