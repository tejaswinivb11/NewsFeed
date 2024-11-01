import { useEffect, useState } from "react"
import NewIteam from "./NewIteam";

function Newsboard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a4051659585a400c8da522bd5b891806`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Latest <span className="badge text-bg-danger">NEWS</span>
      </h2>
      <div className="row">
        {articles.map((news, index) => (
          <div className="col-md-4" key={index}>
            <NewIteam
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newsboard