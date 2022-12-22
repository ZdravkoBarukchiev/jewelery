export const Jewellery = () => {
    return (<root>

        {/* item section */}
        <div className="item_section layout_padding2">
            <div className="container">
                <div className="item_container">
                    <div className="box">
                        <div className="price">
                            <h6>Best PRICE</h6>
                        </div>
                        <div className="img-box">
                            <img src="images/i-1.png" alt="" />
                        </div>
                        <div className="name">
                            <h5>Bracelet</h5>
                        </div>
                    </div>
                    <div className="box">
                        <div className="price">
                            <h6>Best PRICE</h6>
                        </div>
                        <div className="img-box">
                            <img src="images/i-2.png" alt="" />
                        </div>
                        <div className="name">
                            <h5>Ring</h5>
                        </div>
                    </div>
                    <div className="box">
                        <div className="price">
                            <h6>Best PRICE</h6>
                        </div>
                        <div className="img-box">
                            <img src="images/i-3.png" alt="" />
                        </div>
                        <div className="name">
                            <h5>Earings</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end item section */}
        {/* price section */}
        <section className="price_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>Our Jewellery Price</h2>
                </div>
                <div className="price_container">
                    <div className="box">
                        <div className="name">
                            <h6>Diamond Ring</h6>
                        </div>
                        <div className="img-box">
                            <img src="images/p-1.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                                $<span>1000.00</span>
                            </h5>
                            <a href="">Buy Now</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="name">
                            <h6>Diamond Ring</h6>
                        </div>
                        <div className="img-box">
                            <img src="images/i-2.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                                $<span>1000.00</span>
                            </h5>
                            <a href="">Buy Now</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="name">
                            <h6>Diamond Ring</h6>
                        </div>
                        <div className="img-box">
                            <img src="images/i-3.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                                $<span>1000.00</span>
                            </h5>
                            <a href="">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="" className="price_btn">
                        See More
                    </a>
                </div>
            </div>
        </section>
        {/* end price section */}
        {/* info section */}
        <section className="info_section ">
            <div className="container">
                <div className="info_container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="info_logo">
                                <a href="">
                                    <img src="images/logo.png" alt="" />
                                    <span>Lodge</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_contact">
                                <a href="">
                                    <img src="images/location.png" alt="" />
                                    <span>Address</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_contact">
                                <a href="">
                                    <img src="images/phone.png" alt="" />
                                    <span>+01 1234567890</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_contact">
                                <a href="">
                                    <img src="images/mail.png" alt="" />
                                    <span>demo@gmail.com</span>
                                </a>
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
                            <a href="">
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
                            </a>
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
        {/* footer section */}

    </root>)


}