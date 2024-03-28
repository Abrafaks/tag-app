import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useStoreState } from 'easy-peasy';
import TagItem from './TagItem';
import { v4 } from 'uuid';
import { Typography } from '@mui/material';

const TagList = () => {
  const tags = useStoreState(state => state.tags);

  return (
    <Grid container spacing={2}>
      {tags && tags.length > 0 ? (
        tags.map(({ name, count }) => <TagItem key={v4()} name={name} count={count} />)
      ) : (
        <Typography variant="body1" gutterBottom>
          No tags to display
        </Typography>
      )}
    </Grid>
  );
};

export default TagList;
