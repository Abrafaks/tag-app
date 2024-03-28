// import { useEffect } from 'react';
// import { useAxiosFetch } from './hooks/useAxiosFetch';
// import { useStoreActions } from 'easy-peasy';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import TagList from './components/TagList';

function App() {
  // const setTags = useStoreActions(actions => actions.setTags);
  // const setMaxPage = useStoreActions(actions => actions.setMaxPage);

  // const { data } = useAxiosFetch(
  //   'https://api.stackexchange.com/2.3/tags?&order=desc&sort=popular&site=stackoverflow'
  // );
  // const totalResponse = useAxiosFetch(
  //   'https://api.stackexchange.com/2.3/tags?&order=desc&sort=popular&site=stackoverflow&filter=total'
  // );
  // const defaultPageSize = 30;
  // const maxPage = Math.ceil(totalResponse.data.total / defaultPageSize);

  // useEffect(() => {
  //   setTags(data.items);
  //   setMaxPage(maxPage);
  // }, [data, setTags, totalResponse, setMaxPage]);

  return (
    <div className="App">
      <Header />
      <Searchbar />
      <TagList />
    </div>
  );
}

export default App;
