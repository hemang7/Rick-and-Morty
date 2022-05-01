import React from "react";
import "./Cards.css";

const Cards = (props) => {
  let display;
  console.log(props.results);

  if (props.results) {
    display = props.results.map((data) => {
      return (
        <div
          className="col-lg-3 col-md-6 col-12 position-relative mb-4 mt-4"
          key={data.id}
        >
          <div className="card mb-3 mt-3">
            <img src={data.image} className="card-img-top img" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">{data.name}</h5>
              <p className="card-text">
                <span className="fw-bold">Gender :</span> {data.gender}
              </p>
              <p className="card-text">
                <span className="fw-bold">Species :</span> {data.species}
              </p>
              <p className="card-text">
                <span className="fw-bold">Origin :</span> {data.origin.name}
              </p>
              <p className="card-text">
                <span className="fw-bold">Location :</span> {data.location.name}
              </p>
            </div>
          </div>
          {(() => {
            if (data.status === "Dead") {
              return (
                <div className="position-absolute badge bg-danger">
                  {data.status}
                </div>
              );
            } else if (data.status === "Alive") {
              return (
                <div className="position-absolute badge bg-success">
                  {data.status}
                </div>
              );
            } else {
              return (
                <div className="position-absolute badge bg-secondary">
                  {data.status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No characters to show!";
  }

  return <>{display}</>;
};

export default Cards;
