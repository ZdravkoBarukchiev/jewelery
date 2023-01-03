import { Link } from "react-router-dom"
export const Contacts = () => {
  return (<body class="sub_page">
    <div className="hero_area">
      {/* header section strats */}
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              <img src="images/logo.png" alt="" />
              <span>Lodge</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      {" "}
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/jewellery">
                      Jewellery{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contacts">
                      Contact us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="quote_btn-container ">
                <Link to="/">
                  <img src="images/cart.png" alt="" />
                  <div className="cart_number">0</div>
                </Link>
                <form className="form-inline">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end header section */}
    </div>
    {/* contact section */}
    <section className="contact_section layout_padding">
      <div className="design-box">
        <img src="images/design-2.png" alt="" />
      </div>
      <div className="container ">
        <div className="">
          <h2 className="">Contact Us</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone" />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                />
              </div>
              <div className="d-flex ">
                <button>SEND</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <div className="map-responsive">
                {<iframe
                  title='map'
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width={600}
                  height={300}
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allowFullScreen=""
                />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end contact section */}
    {/* info section */}
    <section className="info_section ">
      <div className="container">
        <div className="info_container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_logo">
                {/*<a href="">
                <img src="images/logo.png" alt="" />
                <span>Lodge</span>
              </a>*/}
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_contact">
                {/*<a href="">
                <img src="images/location.png" alt="" />
                <span>Address</span>
                 </a>*/}
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_contact">
                {/*<a href="">
                  <img src="images/phone.png" alt="" />
                  <span>+01 1234567890</span>
                </a>*/}
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_contact">
                {/*<a href="">
                  <img src="images/mail.png" alt="" />
                  <span>demo@gmail.com</span>
                  </a>*/}
              </div>
            </div>
          </div>
          <div className="info_form">
            <div className="d-flex justify-content-center">
              <h5 className="info_heading">Newsletter</h5>
            </div>
            <form action="">
              <div className="email_box">
                <label htmlFor="email2">Enter Your Email</label>
                <input type="text" id="email2" />
              </div>
              <div>
                <button>subscribe</button>
              </div>
            </form>
          </div>
          <div className="info_social">
            <div className="d-flex justify-content-center">
              <h5 className="info_heading">Follow Us</h5>
            </div>
            <div className="social_box">
              {/*<a href="">
                <img src="images/fb.png" alt="" />
              </a>
              <a href="">
                <img src="images/twitter.png" alt="" />
              </a>
              <a href="">
                <img src="images/linkedin.png" alt="" />
              </a>
              <a href="">
                <img src="images/insta.png" alt="" />
              </a>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end info_section */}
    {/* footer section */}
    <section className="container-fluid footer_section">
      <p>
        © <span id="displayYear" /> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </section>
    {/* end footer section */}
  </body>
  )

}