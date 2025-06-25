export const Footer = () => {
  return (
    <>
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <img src="logo.png" alt="" />
          <p>Movie is never a bad idea🍿</p>
          <img src="logo.png" alt="" />
        </div>
        <div className="content_2">
          <h2 style={{color:"white"}}>Websites:</h2>
          <a href="#">www.moviehub.com</a>
          <a href="#">www.justwatch.com</a>
          <a href="#">www.netflix.com</a>
          <a href="#">www.moviesanywhere.com</a>
        </div>
        <div className="content_3">
          <h4>Designer</h4>
          <a href="#">Contact Us</a>
          <a href="#">+91 6767676767</a>
          <a href="#">abc@gmail.com</a>
        </div>
        <div className="content_4">
          <h4>Developer</h4>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" name="" id="" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>Power of unity</p>
        </div>
      </div>
    </footer>
    </>
  )
}