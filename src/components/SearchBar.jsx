import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from "../redux/actions/newsActions";
import { Button, Form } from 'react-bootstrap';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(fetchNews('', query));
    }
  };

  return (
    <Form className="d-flex mb-3" onSubmit={handleSearch}>
      <Form.Control 
        type="search"
        placeholder="Search news..."
        className="me-2"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}

export default SearchBar;