import { Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <Typography variant="h4" gutterBottom>
        Tags
      </Typography>
      <Typography variant="body1" gutterBottom>
        A tag is a keyword or label that categorizes your question with other, similar questions.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Using the right tags makes it easier for others to find and answer your question.
      </Typography>
    </div>
  );
};

export default Header;
