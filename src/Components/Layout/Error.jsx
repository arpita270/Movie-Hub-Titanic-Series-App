// import { useRouteError } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom";
export const Error = () => {
    // let Err = useRouteError()
    // console.log(Err);
    let navigate= useNavigate()
    let handleClick=()=>{
        navigate(-1)
    }
  return (
    <>
    <section  className="error-section">
        <div id="error-text">
            <figure>
                <img src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-download-in-lottie-json-gif-static-svg-file-formats--space-spaceman-find-the-ultimate-pack-design-development-animations-3299959.gif" alt="" />
            </figure>
            <div className="text-center">
                <p className="p-a">
                    The page that you are looking for is NOT Found......
                </p>
            </div>
        </div>
        <NavLink to="/" className="btn">Back to Home</NavLink>
        <button className="btn" onClick={handleClick}>Go Back</button>
    </section>
    <h1>404 Error PAGE</h1>
    </>
  )
}