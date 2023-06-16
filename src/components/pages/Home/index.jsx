import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovie } from "../../store/homeReducer";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getMovie("marvel"));
  }, [dispatch]);

  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="movie1.jpg" className="d-block w-100" alt="slide 1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="movie2.jpg" className="d-block w-100" alt="slide 2" />
          </div>
          <div className="carousel-item">
            <img src="movie3.jpg" className="d-block w-100" alt="slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
          {home.loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            home.movie.Search?.map((item, index) => (
              <div className="card" style={{ width: "14rem" }} key={index}>
                <div className="card-img-top-container">
                  <img
                    src={item.Poster}
                    className="card-img-top"
                    alt={item.Title}
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{item.Title}</h5>
                  <p className="card-text">{item.Type}</p>
                  <p className="card-text">{item.Year}</p>
                  <div className="card-footer">
                    <Link to={`/detail/${item.imdbID}`}>
                      <button
                        type="button"
                        className="btn btn-outline-warning w-100"
                      >
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
