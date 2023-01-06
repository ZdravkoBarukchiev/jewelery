import { Link } from "react-router-dom";
import { FooterSection } from "../footerSection/FooterSectoin";
import { HeaderNavigation } from "../headerNavigation/HeaderNavigation";

export const Contacts = () => {
  return (<body class="sub_page">
    <div className="hero_area">
      <HeaderNavigation />
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
                <Link to="/">
                  <img src="images/logo.png" alt="" />
                  <span>Lodge</span>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_contact">
                <Link to="/">
                  <img src="images/location.png" alt="" />
                  <span>Address</span>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_contact">
                <Link to="/">
                  <img src="images/phone.png" alt="" />
                  <span>+01 1234567890</span>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_contact">
                <Link to="/">
                  <img src="images/mail.png" alt="" />
                  <span>demo@gmail.com</span>
                </Link>
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
              <Link to="/">
                <img src="images/fb.png" alt="" />
              </Link>
              <Link to="/">
                <img src="images/twitter.png" alt="" />
              </Link>
              <Link to="/">
                <img src="images/linkedin.png" alt="" />
              </Link>
              <Link to="/">
                <img src="images/insta.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* end info_section */}
    <FooterSection />
  </body>
  )

}