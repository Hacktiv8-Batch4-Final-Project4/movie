import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetail } from '../../store/detailReducer'

const Detail = () => {
  const dispatch = useDispatch()
  const detail = useSelector((state) => state.detail)
  const {query} = useParams()
  console.log(query);

  useEffect(() => {
    dispatch(getDetail(query))
  }, [dispatch, query])

  console.log(detail);

  return (
    <div className='container'>
      <div className='d-flex flex-wrap justify-content-center gap-4'>
        {detail.loading ? (
          <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Loading...</span>
            </div>
        ) : (
          <div>
            <img src={detail.detail.Poster} alt={detail.detail.Title} />
            <h1>Title: {detail.detail.Title}</h1>
            <p>Tahun: {detail.detail.Year}</p>
            <p>Rated: {detail.detail.Rated}</p>
            <p>Released: {detail.detail.Released}</p>
            <p>Runtime: {detail.detail.Runtime}</p>
            <p>genre: {detail.detail.Genre}</p>
            <p>Director: {detail.detail.Director}</p>
            <p>Writer: {detail.detail.Writer}</p>
            <p>Actors: {detail.detail.Actors}</p>
            <p>Plot: {detail.detail.Plot}</p>
            <p>Language: {detail.detail.Language}</p>
            <p>Country: {detail.detail.Country}</p>
            <p>Awards: {detail.detail.Awards}</p>
            <p>Rating from: 
              {detail.detail.Ratings?.map((item, index) => (
                <div key={index}>
                  <p>{item.Source}: {item.Value}</p>
                </div>
              ))}
            </p>
            <p>Rating: {detail.detail.imdbRating}</p>
            <p>Votes: {detail.detail.imdbVotes}</p>
            <p>Type: {detail.detail.Type}</p>
          </div>
        )}
        </div>
    </div>
  )
}

export default Detail