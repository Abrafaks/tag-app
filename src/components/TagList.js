import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useStoreState } from 'easy-peasy';
import TagItem from './TagItem';
import { v4 } from 'uuid';

const TagList = () => {
  const tags = useStoreState(state => state.tags);

  return (
    <Grid container spacing={2}>
      {tags.map(({ name, count }) => (
        <TagItem key={v4()} name={name} count={count} />
      ))}
    </Grid>
  );
};

export default TagList;
