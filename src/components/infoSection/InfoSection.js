import { Link } from "react-router-dom";
export const InfoSection = () => {
    
    return (
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
    )
}