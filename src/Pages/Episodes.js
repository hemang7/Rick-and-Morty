import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/InputGroup";
import "../components/Navbar/Navbar.css";

const Episodes = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  let { air_date, name } = info;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let charData = await Promise.all(
        data.characters.map((character) =>
          fetch(character).then((res) => res.json())
        )
      );
      setResults(charData);
    })();
  }, [api]);

  return (
    <div className="container bangers">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Episode : {name === "" ? "Unknown" : name}
        </h1>
        <h5 className="text-center">
          Air Date : {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-2 col-12">
          <h4 className="text-center mb-4  d-flex justify-content">
            Pick Episode
          </h4>
          <InputGroup name="Episode" total={51} setID={setID} />
        </div>

        <div className="col-lg-10 col-12">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
