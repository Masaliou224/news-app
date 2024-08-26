import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "./NewsCard";
import { fetchNews } from "../redux/actions/newsActions";

function NewsList() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.articles);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <Row>
      {news.map((article, index) => (
        <Col key={index} sm={12} md={6} lg={4} className="mb-3">
          <NewsCard article={article} />
        </Col>
      ))}
    </Row>
  );
}

export default NewsList;