import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
export const Jewellery = () => {
    const { loginData } = useContext(LoginContext);
    const search = (e) => {
        e.preventDefault()
        console.log('search');
    }
    return (<body class="sub_page">
        <div className="hero_area">
            {/* header section */}
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
                                {loginData._id && <span>{loginData.email}</span>}
                                {loginData._id ? (
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                            <Link to='/' className="nav-link">
                                                Home <span className="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/about' className="nav-link" >
                                                {" "}
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/jewellery' className="nav-link" >
                                                Jewellery{" "}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/contacts' className="nav-link">
                                                Contact us
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/logout' className="nav-link">
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                            <Link to='/' className="nav-link">
                                                Home <span className="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/about' className="nav-link" >
                                                {" "}
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/jewellery' className="nav-link" >
                                                Jewellery{" "}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/contacts' className="nav-link">
                                                Contact us
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/login' className="nav-link" >
                                                Login
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/register' className="nav-link" >
                                                Register
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className="quote_btn-container ">
                                <Link to="/">
                                    <img src="images/cart.png" alt="" />
                                    <div className="cart_number">0</div>
                                </Link>
                                <form className="form-inline" onSubmit={search}>
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
                            <h6>Diamond Bracelet</h6>
                        </div>
                        <div className="img-box">
                            <img src="images/p-1.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                                $<span>1000.00</span>
                            </h5>
                            <Link to="/">Buy Now</Link>
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
                            <Link to="/">Buy Now</Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="name">
                            <h6>Diamond Earings</h6>
                        </div>
                        <div className="img-box">
                            <img src="images/i-3.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                                $<span>1000.00</span>
                            </h5>
                            <Link to="/">Buy Now</Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/" className="price_btn">
                        See More
                    </Link>
                </div>
            </div>
        </section>
        {/* end price section */}
        {/* ring section */}
        <section className="ring_section layout_padding">
            <div className="design-box">
                <img src="images/design-1.png" alt="" />
            </div>
            <div className="container">
                <div className="ring_container layout_padding2">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="detail-box">
                                <h4>special</h4>
                                <h2>Wedding Ring</h2>
                                <Link to="/">Buy Now</Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="img-box">
                                <img src="images/ring-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end ring section */}
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
        {/* footer section */}
        <section className="container-fluid footer_section">
            <p>
                © <span id="displayYear" /> All Rights Reserved By
                <a href="https://html.design/">Free Html Templates</a>
            </p>
        </section>
        {/* end footer section */}

    </body>)


}