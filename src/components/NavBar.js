import React from 'react';
import Search from './Search';
import SortBy from './SortBy';
import OrderBy from './OrderBy';
import ElementsNumber from './ElementsNumber';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const NavBar = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={9} md={3} display="flex" alignItems="center">
        <Search />
      </Grid>
      <Grid item xs={6} sm={3} md={3} display="flex" alignItems="center">
        <ElementsNumber />
      </Grid>
      <Grid item xs={6} sm={5} md={3} display="flex" alignItems="center">
        <OrderBy />
      </Grid>
      <Grid item xs={12} sm={7} md={3} display="flex" alignItems="center">
        <SortBy />
      </Grid>
    </Grid>
  );
};

export default NavBar;

/*


    <>
      <Search />
      <ElementsNumber />
      <OrderBy />
      <SortBy />
    </>

*/
