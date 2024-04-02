import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Unstable_Grid2';
import { v4 } from 'uuid';
import { Stack, CircularProgress, Typography } from '@mui/material';
import TagItem from './TagItem';

const TagList = ({ isLoading, isError, tags }) => {
  return (
    <>
      {isLoading && (
        <Stack alignItems={'center'} mt={5}>
          <CircularProgress />
        </Stack>
      )}

      {isError && (
        <Typography variant="body1" gutterBottom mt={5}>
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

TagList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired
};

export default TagList;
