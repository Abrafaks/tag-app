import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';

const OrderBy = () => {
  const isLoading = useStoreState(state => state.isLoading);
  const tags = useStoreState(state => state.tags);
  const order = useStoreState(state => state.order);
  const setOrder = useStoreActions(actions => actions.setOrder);
  const getTags = useStoreActions(actions => actions.getTags);

  const handleOrder = (event, newOrder) => {
    if (newOrder) {
      setOrder(newOrder);
      getTags();
    }
  };

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

export default OrderBy;
