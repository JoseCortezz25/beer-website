import { useState, useEffect } from "react";
import { getBeersByPage } from "./service/fetchData";
import { Link } from "react-router-dom";
import BeerList from "./components/BeerList/BeerList";
import { useParams, useResolvedPath } from "react-router-dom";
import "./Home.css";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { page } = useParams("");
  const { pathname } = useResolvedPath("");

  console.log(pathname.includes("/page"));
  useEffect(() => {
    pathname.includes("/page")
      ? getBeersByPage(page).then((data) => {
          console.log(data);
          setBeers(data);
          setSearchResults(data);
        })
      : getBeersByPage(1).then((data) => {
          console.log(data);
          setBeers(data);
          setSearchResults(data);
        });
  }, [page]);

  const handleSearch = (text) => {
    setSearchResults(
      beers.filter((beer) =>
        beer.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <div className="Home">
      <input
        type="text"
        onChange={({ target }) => handleSearch(target.value)}
        placeholder="Searching..."
      />
      <BeerList beers={searchResults} />
      <div className="Pagination">
        <Link to={pathname.includes('/page/2') ? `/` : `/page/${page-1}`}><a><button>{"<"}</button></a></Link>
        <Link to={pathname.includes('/') ? `/page/2` : `/page/${page+1}`}><a><button>{">"}</button></a></Link>
      </div>
    </div>
  );
}

export default App;
