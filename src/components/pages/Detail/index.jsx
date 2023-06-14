import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=25129c6`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [imdbID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Failed to fetch movie details.</div>;
  }

  return (
      <div
        className="card d-flex align-items-center justify-content-center mx-auto"
        style={{
          width: "75%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movie.Poster}
              className="img-fluid rounded-start"
              alt="Movie"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">Plot: {movie.Plot}</p>
              <p className="card-text">Released: {movie.Released}</p>
              <p className="card-text">Genre: {movie.Genre}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Detail;
