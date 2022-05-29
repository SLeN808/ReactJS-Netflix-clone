import React, { useEffect, useState } from "react";
import "./Row.css";

function Row(props) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    function fetchData() {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
          "X-RapidAPI-Key":
            "f78a5be3c5msh1439f05d3f44805p163717jsn5fc0bb9737ad",
        },
      };

      fetch(
        `https://online-movie-database.p.rapidapi.com/auto-complete?q=${props.title}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          const list = data.d;
          setMovie(list);
        })
        .catch((err) => console.error(err));
    }

    fetchData();
  }, []);

  return (
    <div className="row">
      <h1 className="row_title">{props.banner}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className="row_poster"
            key={movie.id}
            src={movie.i.imageUrl}
            alt="err"
          />
        ))}
      </div>

      {/* <h1 className="row_poster_title">{movies.title}</h1> */}
    </div>
  );
}

export default Row;
