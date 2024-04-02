/* eslint-disable no-unused-vars */
import { action, createStore, thunk } from 'easy-peasy';
import api from '../api/tags';

export default createStore({
  tags: [],
  setTags: action((state, payload) => {
    state.tags = payload;
  }),
  search: '',
  setSearch: action((state, payload) => {
    state.search = payload;
  }),
  page: 1,
  setPage: action((state, payload) => {
    state.page = payload;
  }),
  maxPage: 25,
  setMaxPage: action((state, payload) => {
    state.maxPage = payload;
  }),
  pageSize: 30,
  setPageSize: action((state, payload) => {
    state.pageSize = payload;
  }),
  sort: 'popular',
  setSort: action((state, payload) => {
    state.sort = payload;
  }),
  order: 'desc',
  setOrder: action((state, payload) => {
    state.order = payload;
  }),
  isLoading: false,
  setIsLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  isError: false,
  setIsError: action((state, payload) => {
    state.isError = payload;
  }),
  getTags: thunk(async (actions, _payload, helpers) => {
    const { page, pageSize, order, sort, search } = helpers.getState();
    const lowercaseSearch = search.toLowerCase();
    const url = `/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&inname=${lowercaseSearch}&site=stackoverflow&key=${process.env.REACT_APP_API_KEY}`;
    try {
      actions.setIsError(false);
      actions.setIsLoading(true);
      const response = await api.get(url);
      console.log(JSON.stringify(response));
      const totalResponse = await api.get(url + '&filter=total');
      actions.setIsLoading(false);

      const total = totalResponse.data.total;
      if (total) {
        const maxPage = Math.ceil(total / pageSize);
        actions.setMaxPage(maxPage);
      }

      actions.setTags(response.data.items);
    } catch (e) {
      actions.setIsLoading(false);
      actions.setIsError(true);
    }
  })
});
