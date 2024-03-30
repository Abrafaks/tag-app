import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const OrderBy = ({ isLoading, tags, order, handleOrder }) => {
  return (
    <ToggleButtonGroup value={order} exclusive onChange={handleOrder} fullWidth>
      <ToggleButton value="asc" disabled={isLoading || tags.length === 0}>
        Ascending
      </ToggleButton>
      <ToggleButton value="desc" disabled={isLoading || tags.length === 0}>
        Descending
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

OrderBy.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  handleOrder: PropTypes.func.isRequired
};

export default OrderBy;
