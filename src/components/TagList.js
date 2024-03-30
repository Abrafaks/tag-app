import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useStoreState } from 'easy-peasy';
import TagItem from './TagItem';
import { v4 } from 'uuid';
import { Stack, CircularProgress, Typography } from '@mui/material';

const TagList = () => {
  const isLoading = useStoreState(state => state.isLoading);
  const isError = useStoreState(state => state.isError);
  const tags = useStoreState(state => state.tags);

  return (
    <>
      {isLoading && (
        <Stack alignItems={'center'} mt={5}>
          <CircularProgress />
        </Stack>
      )}

      {isError && (
        <Typography variant="body1" gutterBottom>
          Error occurred
        </Typography>
      )}

      {!isError && !isLoading && tags && tags.length > 0 && (
        <Grid container spacing={2} mt={5} height={'auto'}>
          {tags.map(({ name, count }) => (
            <TagItem key={v4()} name={name} count={count} />
          ))}
        </Grid>
      )}

      {!isError && !isLoading && tags && tags.length === 0 && (
        <Typography variant="body1" gutterBottom mt={5}>
          No tags to display
        </Typography>
      )}
    </>
  );
};

export default TagList;
