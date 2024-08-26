import { useDispatch } from 'react-redux';
import { fetchNews } from "../redux/actions/newsActions";
import { Button, ButtonGroup } from 'react-bootstrap';

const categories = ['general', 'business', 'sports', 'science', 'health', 'entertainment', 'technology'];

function Categories() {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(fetchNews(category));
  };

  return (
    <ButtonGroup className="mb-3">
      {categories.map(category => (
        <Button key={category} onClick={() => handleCategoryClick(category)}> 
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default Categories;