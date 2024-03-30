import { Pagination } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';

const PaginationComponent = () => {
  const isLoading = useStoreState(state => state.isLoading);
  const tags = useStoreState(state => state.tags);
  const page = useStoreState(state => state.page);
  const maxPage = useStoreState(state => state.maxPage);
  const setPage = useStoreActions(actions => actions.setPage);
  const getTags = useStoreActions(actions => actions.getTags);

  const handleChange = (event, value) => {
    setPage(value);
    getTags();
  };

  return (
    <>
      <Pagination
        className="pagination"
        count={maxPage}
        page={page}
        onChange={handleChange}
        disabled={isLoading || tags.length === 0}
        style={{ margin: '5% 0' }}
      />
    </>
  );
};

export default PaginationComponent;
