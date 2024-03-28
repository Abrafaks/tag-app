import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect } from 'react';

const OrderBy = () => {
  const order = useStoreState(state => state.order);
  const setOrder = useStoreActions(actions => actions.setOrder);
  const getTags = useStoreActions(actions => actions.getTags);

  const handleOrder = (event, newOrder) => {
    if (newOrder) {
      setOrder(newOrder);
    }
  };

  useEffect(() => {
    getTags();
  }, [order]);

  return (
    <ToggleButtonGroup value={order} exclusive onChange={handleOrder} fullWidth>
      <ToggleButton value="asc">Ascending</ToggleButton>
      <ToggleButton value="desc">Descending</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default OrderBy;
