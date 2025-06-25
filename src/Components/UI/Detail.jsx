import { NavLink, useLoaderData } from 'react-router-dom'
import './Display.css'
export const Detail = () => {
    let data = useLoaderData()
    console.log(data);
        let{Actor, Poster, Title, Runtime, Genre, Type, Year, Plot, BoxOffice, imdbID, Awards, imdbRating} = data

          let totalMin = Runtime.replace("min","");
    let hours = Math.floor(totalMin/60);
    let minutes = totalMin%60;
    console.log(hours, minutes);
    
    let formate = `${hours}hr ${minutes}min`
    console.log(formate);
  return (
    <>
<li className="hero-continer hero-movie-container">
        <div className='main-container'>
            <figure className='movie'>
                <div className='movie__hero'>
                    <img src={Poster} alt=""  className='movie__img'/>
                </div>
                <div className="movie__content">
                    <div className="movie__title">
                        <h1 className="heading__primary">
                            {Title} <i className='fas fa-fire'></i>
                        </h1>
                        <div className="movie__tag movie__tag--1">{`#${Type}`}</div>
                        <div className="movie__tag movie__tag--2">Year: {Year}</div>
                    </div>
                    <p className="movie__description">{Plot}</p>
                    <br />
                    <p className="movie__description">Awards: {Awards}</p>
                    <div className="movie__details">
                        <p className="movie__details">
                            <span className="icons icons-red">
                                <i className="fas fa-camera-retro"></i>
                            </span>
                            Rating: {imdbRating}
                        </p>
                        <p className='movie__details'>
                            <span className="icons icons-grey">
                                <i className='fas fa-clock'></i>
                            </span>
                            {formate}
                        </p>
                        <p className="movie_detail">
                            <span className="icons icons-yellow">
                                <i className="fas fa-file-invoice-dollar"></i>
                            </span>
                            {BoxOffice}
                        </p>
                    </div>
                    <div>
                    <NavLink to="/service" className="movie__tag movie__tag--2" style={{textAlign:"center",fontSize:"1.6rem"}}>
                    Go Back
                    </NavLink>
                </div>
                </div>
                <div className="movie__price">{BoxOffice}</div>
            </figure>
        </div>
    </li>
    </>
  )
}