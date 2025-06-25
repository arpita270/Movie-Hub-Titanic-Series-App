import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
    
    <header className="section-navbar">
      <section className="top_txt">
        <div className="head container">
          <div className="head_txt">
            <h1 style={{color:"white"}}>M O V I E - H U B</h1>
          </div>
          <div className="sign_in_up">
            <NavLink to="#"  style={{textDecoration:"none", color:"white", marginRight:"10px"}}>Sign In</NavLink>
            <NavLink to="#"  style={{textDecoration:"none", color:"white"}}>Sign Up</NavLink>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="navbar-brand">
          <NavLink to="index">
            <h3></h3>
          </NavLink>
        </div>

         <nav className="navbar">
          <ul>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({isActive})=>isActive?"nav-link active":"nav-link"}>ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" style={({isActive})=>{
                return{
                  color: isActive ? "red":"blue"
                  }}}>CONTACT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/service" className="nav-link">MOVIES</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}