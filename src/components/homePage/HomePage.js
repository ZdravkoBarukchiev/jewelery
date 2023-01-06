import { Link } from "react-router-dom";
import { HeaderNavigation } from "../headerNavigation/HeaderNavigation";

export const HomePage = () => {
    return (<body>
        <div className="hero_area">
            <HeaderNavigation />
            {/* slider section */}
            <section className=" slider_section position-relative">
                <div className="design-box">
                    <img src="images/design-1.png" alt="" />
                </div>
                <div className="slider_number-container d-none d-md-block">
                    <div className="number-box">
                        <span>01</span>
                        <hr />
                        <span className="jwel">
                            J <br />
                            e <br />
                            w <br />
                            e <br />
                            l <br />
                            l <br />
                            e <br />
                            r <br />y
                        </span>
                        <hr />
                        <span>02</span>
                    </div>
                </div>
                <div className="container">
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselExampleIndicators"
                                data-slide-to={0}
                                className="active"
                            >
                                01
                            </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                                02
                            </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                                03
                            </li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="detail_box">
                                            <h2>
                                                <span> New Collection</span>
                                                <hr />
                                            </h2>
                                            <h1>Jewellery</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consec tetur adipiscing elit
                                                elit at felislacinia aptent taciti sociosqu ad litora
                                                torquent per conubia nostra
                                            </p>
                                            <div>
                                                <Link to="/jewellery">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="img-box">
                                            <img src="images/slider-img.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end slider section */}
        </div>
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
                                <Link to="/contacts">
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
                        <form >
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