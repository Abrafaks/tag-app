import { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import Header from './components/Header';
import TagList from './components/TagList';
import NavBar from './components/NavBar';
import PaginationComponent from './components/PaginationComponent';

function App() {
  const getTags = useStoreActions(actions => actions.getTags);

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <TagList />
      <PaginationComponent />
    </div>
  );
}

export default App;
