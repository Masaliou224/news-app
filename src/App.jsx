
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <SearchBar />
        <Categories />
        <NewsList />
      </div>
    </Provider>
  )
}

export default App
