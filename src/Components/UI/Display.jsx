import { NavLink } from 'react-router-dom'
import './Display.css'
export const Display = ({val}) => {
    let {Poster,imdbID} = val
    console.log(imdbID);
  return (
    <>
    <li className='hero-container'>
        <div className="main-container">
            <div className="poster-container">
                <img src={Poster} alt={imdbID} className='poster'/>
            </div>
            <div className="ticket-container">
                <div className="ticket__content">
                    <NavLink to={`/service/${imdbID}`}>
                    <button className='ticket__buy-btn'>Watch Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </li>
    </>
  )
}