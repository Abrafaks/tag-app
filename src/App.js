import { useEffect } from 'react';
import { useAxiosFetch } from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';
import Header from './components/Header';
import TagList from './components/TagList';
import NavBar from './components/NavBar';

function App() {
  const setTags = useStoreActions(actions => actions.setTags);
  const setMaxPage = useStoreActions(actions => actions.setMaxPage);

  const { data, fetchError } = useAxiosFetch(
    'https://api.stackexchange.com/2.3/tags?&order=desc&sort=popular&site=stackoverflow'
  );
  const { data: totalData, fetchError: totalFetchError } = useAxiosFetch(
    'https://api.stackexchange.com/2.3/tags?&order=desc&sort=popular&site=stackoverflow&filter=total'
  );
  const defaultPageSize = 30;
  const maxPage = Math.ceil(totalData.total / defaultPageSize);

  useEffect(() => {
    if (!fetchError) {
      setTags(data.items);
    }

    if (!totalFetchError) {
      setMaxPage(maxPage);
    }
  }, [data, setTags, totalData, setMaxPage]);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <TagList />
    </div>
  );
}

export default App;
