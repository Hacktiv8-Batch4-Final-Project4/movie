import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../store/detailReducer';

const Detail = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const { query } = useParams();

  useEffect(() => {
    dispatch(getDetail(query));
  }, [dispatch, query]);

  return (
    <div className='container'>
      <div className='d-flex flex-wrap justify-content-center gap-4'>
        {detail.loading ? (
          <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        ) : (
          <div className='detail-container text-white d-flex'>
            <div className='poster-container mt-3'>
              <img className='posterImage' src={detail.detail.Poster} alt={detail.detail.Title} />
            </div>
            <div className='table-container'>
              <h1>Title: {detail.detail.Title}</h1>
              <table>
                <tbody>
                  <tr>
                    <td>Tahun:</td>
                    <td>{detail.detail.Year}</td>
                  </tr>
                  <tr>
                    <td>Rated:</td>
                    <td>{detail.detail.Rated}</td>
                  </tr>
                  <tr>
                    <td>Released:</td>
                    <td>{detail.detail.Released}</td>
                  </tr>
                  <tr>
                    <td>Runtime:</td>
                    <td>{detail.detail.Runtime}</td>
                  </tr>
                  <tr>
                    <td>Genre:</td>
                    <td>{detail.detail.Genre}</td>
                  </tr>
                  <tr>
                    <td>Director:</td>
                    <td>{detail.detail.Director}</td>
                  </tr>
                  <tr>
                    <td>Writer:</td>
                    <td>{detail.detail.Writer}</td>
                  </tr>
                  <tr>
                    <td>Actors:</td>
                    <td>{detail.detail.Actors}</td>
                  </tr>
                  <tr>
                    <td>Language:</td>
                    <td>{detail.detail.Language}</td>
                  </tr>
                  <tr>
                    <td>Country:</td>
                    <td>{detail.detail.Country}</td>
                  </tr>
                  <tr>
                    <td>Awards:</td>
                    <td>{detail.detail.Awards}</td>
                  </tr>
                  <tr>
                    <td>Rating from:</td>
                    <td>
                      {detail.detail.Ratings?.map((item, index) => (
                        <div key={index}>
                          <p>{item.Source}: {item.Value}</p>
                        </div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Rating:</td>
                    <td>{detail.detail.imdbRating}</td>
                  </tr>
                  <tr>
                    <td>Votes:</td>
                    <td>{detail.detail.imdbVotes}</td>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td>{detail.detail.Type}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2}>Plot: {detail.detail.Plot}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
