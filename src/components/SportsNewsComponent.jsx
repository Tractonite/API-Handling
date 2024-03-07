import React, {useState, useEffect} from 'react'
import { getSportsNews } from '../API/getSportsNews'



export default function SportsNewsComponent() {
  const [news, setNews] = useState([]);
  const isData = news != null && news.length > 0

  useEffect(() => {
    async function fetchData() {
      const result = await getSportsNews()
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
