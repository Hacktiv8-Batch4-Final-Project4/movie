import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovie } from '../../store/homeReducer';
import { Link, useParams } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);
  const { query } = useParams();

  useEffect(() => {
    dispatch(getMovie(query));
  }, [dispatch, query]);

  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {home.loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className='detail-container text-white d-flex flex-wrap justify-content-center gap-4'>
              {
                home.movie.Search?.map((item, index) => (
                    <div className="card" style={{ width: '14rem' }} key={index}>
                    <div className='card-img-top-container'>
                      <img
                        src={item.Poster}
                        className="card-img-top"
                        alt={item.Title}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.Title}</h5>
                      <p className="card-text">{item.Year}</p>
                      <p className="card-text">{item.Type}</p>
                      <div className="card-footer">
                        <Link to={`/detail/${item.imdbID}`}>
                          <button type='button' className="btn btn-outline-warning w-100">
                            Lihat detail
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
