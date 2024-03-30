import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@mui/material';

const PaginationComponent = ({ isLoading, tags, page, maxPage, handlePageChange }) => {
  return (
    <>
      <Pagination
        className="pagination"
        count={maxPage}
        page={page}
        onChange={handlePageChange}
        disabled={isLoading || tags.length === 0}
        style={{ margin: '5% 0' }}
      />
    </>
  );
};

PaginationComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired
};

export default PaginationComponent;
