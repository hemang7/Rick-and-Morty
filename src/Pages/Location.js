import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/InputGroup";
import "../components/Navbar/Navbar.css";

const Location = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  let api = `https://rickandmortyapi.com/api/location/${id}`;
  let { name, type, dimension } = info;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let charData = await Promise.all(
        data.residents.map((resident) =>
          fetch(resident).then((res) => res.json())
        )
      );
      setResults(charData);
    })();
  }, [api]);

  return (
    <div className="container bangers">
      <div className="row mb-3">
        <h1 className="text-center mb-3 bangers">
          Location : {name === "" ? "Unknown" : name}
        </h1>
        <h5 className="text-center">
          Dimension : {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type : {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-2 col-12">
          <h4 className="text-center mb-4  d-flex justify-content">
            Pick Location
          </h4>
          <InputGroup name="Location" total={126} setID={setID} />
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

export default Location;
