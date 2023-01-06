import { Link } from "react-router-dom";
import { FooterSection } from "../footerSection/FooterSectoin";
import { HeaderNavigation } from "../headerNavigation/HeaderNavigation";
import { InfoSection } from "../infoSection/InfoSection";

export const About = () => {
    return (<body class="sub_page">
        <div className="hero_area">
            <HeaderNavigation />
        </div>
        {/* about section */}
        <section className="about_section layout_padding2-top layout_padding-bottom">
            <div className="design-box">
                <img src="images/design-2.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>About Jewellery Shop</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud
                            </p>
                            <div>
                                <Link to="/about">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src="images/about-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end about section */}
        {/* client section */}
        <section className="client_section">
            <div className="container">
                <div className="heading_container">
                    <h2>Testimonial</h2>
                </div>
                <h4 className="secondary_heading">What is says our customer</h4>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="client_container">
                                <div className="client-id">
                                    <div className="img-box">
                                        <img src="images/client.png" alt="" />
                                    </div>
                                    <div className="name">
                                        <h5>Aliqua</h5>
                                        <h6>Consectetur adipiscing</h6>
                                    </div>
                                </div>
                                <div className="detail-box">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrudLorem ipsum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        className="carousel-control-prev"
                        to="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link
                        className="carousel-control-next"
                        to="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </Link>
                </div>
            </div>
        </section>
        {/* end client section */}
        <InfoSection />
        <FooterSection />
    </body>)
}