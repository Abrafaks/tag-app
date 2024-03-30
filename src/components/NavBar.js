import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Search from './Search';
import SortBy from './SortBy';
import OrderBy from './OrderBy';
import ElementsNumber from './ElementsNumber';

const NavBar = ({
  isLoading,
  tags,
  order,
  pageSize,
  sort,
  search,
  handleOrder,
  handleElementChange,
  handleSort,
  handleInputChange
}) => {
  return (
    <Grid container spacing={1}>
      <Grid xs={12} sm={9} md={3} display="flex" alignItems="center">
        <Search isLoading={isLoading} search={search} handleInputChange={handleInputChange} />
      </Grid>
      <Grid xs={12} sm={3} md={2} display="flex" alignItems="center">
        <ElementsNumber
          isLoading={isLoading}
          tags={tags}
          pageSize={pageSize}
          handleElementChange={handleElementChange}
        />
      </Grid>
      <Grid xs={12} sm={5} md={3} display="flex" alignItems="center">
        <OrderBy isLoading={isLoading} tags={tags} order={order} handleOrder={handleOrder} />
      </Grid>
      <Grid xs={12} sm={7} md={4} display="flex" alignItems="center">
        <SortBy isLoading={isLoading} tags={tags} sort={sort} handleSort={handleSort} />
      </Grid>
    </Grid>
  );
};

NavBar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  pageSize: PropTypes.oneOf([15, 30, 60, 90]).isRequired,
  sort: PropTypes.oneOf(['popular', 'name', 'activity']).isRequired,
  search: PropTypes.string.isRequired,
  handleOrder: PropTypes.func.isRequired,
  handleElementChange: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default NavBar;
