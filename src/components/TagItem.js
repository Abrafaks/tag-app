import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Unstable_Grid2';
import { Paper, Typography } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import { v4 } from 'uuid';

const TagItem = ({ name, count }) => {
  return (
    <Grid key={v4()} xs={6} sm={4} md={3} lg={2} style={{ display: 'flex' }}>
      <Paper
        elevation={3}
        style={{
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          maxWidth: '100%',
          overflow: 'hidden',
          minHeight: '80px'
        }}
      >
        <TagIcon color="primary" />
        <Typography variant="body1" style={{ marginLeft: 8 }}>
          {name} - {count} questions
        </Typography>
      </Paper>
    </Grid>
  );
};

TagItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

export default TagItem;
