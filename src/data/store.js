import { action, createStore, thunk } from 'easy-peasy';
// import api from '../api/tags';

export default createStore({
  tags: [],
  setTags: action((state, payload) => {
    state.tags = payload;
  }),
  search: '',
  setSearch: action((state, payload) => {
    console.log(payload);
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
  getTags: thunk(async (actions, _payload, helpers) => {
    const { page, pageSize, order, sort, search } = helpers.getState();
    // eslint-disable-next-line no-unused-vars
    const url = `/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&inname=${search}&site=stackoverflow`;
    try {
      // const response = await api.get(url);
      // const totalResponse = await api.get(url + '&filter=total');

      const response = {
        data: {
          items: [
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 2528817,
              name: 'javascript'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 1917299,
              name: 'java'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 1034847,
              name: 'jquery'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 476657,
              name: 'reactjs'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 472017,
              name: 'node.js'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 2528817,
              name: 'javascript'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 1917299,
              name: 'java'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 1034847,
              name: 'jquery'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 476657,
              name: 'reactjs'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 472017,
              name: 'node.js'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 2528817,
              name: 'javascript'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 1917299,
              name: 'java'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 1034847,
              name: 'jquery'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 476657,
              name: 'reactjs'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 472017,
              name: 'node.js'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 2528817,
              name: 'javascript'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 1917299,
              name: 'java'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 1034847,
              name: 'jquery'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 476657,
              name: 'reactjs'
            },
            {
              has_synonyms: true,
              is_moderator_only: false,
              is_required: false,
              count: 472017,
              name: 'node.js'
            }
          ],
          has_more: true,
          quota_max: 10000,
          quota_remaining: 9685
        }
      };
      const totalResponse = { data: { total: 155 } };

      const maxPage = Math.ceil(totalResponse.data.total / pageSize);

      // actions.setTags([
      //   { name: 'js', count: 123 },
      //   { name: 'python', count: 22 }
      // ]);
      actions.setTags(response.data.items);
      actions.setMaxPage(maxPage);
    } catch (e) {
      console.log(e);
    }
  })
});
