import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovie } from '../../store/homeReducer';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const home = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(getMovie());
    }, [dispatch]);

    return (
        <div className='container'>
            <div className='d-flex flex-wrap justify-content-center gap-4'>
                {
                    home.loading ? (
                        <div className='spinner-border text-primary' role='status'>
                            <span className='visually-hidden'>Loading...</span>
                        </div>
                    ) : (
                        home.movie.Search?.map((item, index) => (
                            <div className="card" style={{width: '18rem'}} key={index}>
                                <img src={item.Poster} className="card-img-top" alt={item.Title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.Title}</h5>
                                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>
                                <div className="card-footer">
                                    <Link to={`/detail/${item.imdbID}`} className="btn btn-primary">Lihat detail</Link>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Home