import { useEffect, useRef } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Header from './components/Header';
import TagList from './components/TagList';
import NavBar from './components/NavBar';
import PaginationComponent from './components/PaginationComponent';
import debounce from 'lodash.debounce';

function App() {
  const isLoading = useStoreState(state => state.isLoading);
  const isError = useStoreState(state => state.isError);
  const tags = useStoreState(state => state.tags);
  const getTags = useStoreActions(actions => actions.getTags);
  const order = useStoreState(state => state.order);
  const sort = useStoreState(state => state.sort);
  const search = useStoreState(state => state.search);
  const page = useStoreState(state => state.page);
  const maxPage = useStoreState(state => state.maxPage);
  const pageSize = useStoreState(state => state.pageSize);
  const setOrder = useStoreActions(actions => actions.setOrder);
  const setPageSize = useStoreActions(actions => actions.setPageSize);
  const setSort = useStoreActions(actions => actions.setSort);
  const setSearch = useStoreActions(actions => actions.setSearch);
  const setPage = useStoreActions(actions => actions.setPage);

  useEffect(() => {
    getTags();
  }, []);

  const handleOrder = (event, newOrder) => {
    if (newOrder) {
      setOrder(newOrder);
      setPage(1);
      getTags();
    }
  };

  const handleElementChange = event => {
    setPageSize(event.target.value);
    setPage(1);
    getTags();
  };

  const handleSort = (event, newSort) => {
    if (newSort) {
      setSort(newSort);
      setPage(1);
      getTags();
    }
  };

  const debouncedGetTags = useRef(
    debounce(value => {
      console.log('getting results');
      getTags(value);
    }, 750)
  ).current;

  const handleInputChange = event => {
    const value = event.target.value;
    setSearch(value);
    setPage(1);
    debouncedGetTags(value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    getTags();
  };

  return (
    <div className="App">
      <Header />
      <NavBar
        isLoading={isLoading}
        tags={tags}
        order={order}
        pageSize={pageSize}
        sort={sort}
        search={search}
        handleOrder={handleOrder}
        handleElementChange={handleElementChange}
        handleSort={handleSort}
        handleInputChange={handleInputChange}
      />
      <TagList isLoading={isLoading} isError={isError} tags={tags} />
      <PaginationComponent
        isLoading={isLoading}
        page={page}
        tags={tags}
        maxPage={maxPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
