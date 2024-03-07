import React, { useState, useEffect } from 'react';
import { getBusinessNews } from '../API/getBusinessNews';
function BusinessNewsComponent() {
  const [news, setNews] = useState([]);
  const isData = news != null && news.length > 0

  useEffect(() => {
    async function fetchData() {
      const result = await getBusinessNews()
      setNews(result.articles);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {isData ? news.map(article => (
        <li key={article.title} > {article.title}</li>
      )) :
      <h3>Loading..</h3>
      }
    </ul>
  );
}

export default BusinessNewsComponent;