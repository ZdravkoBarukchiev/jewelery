import { Link } from "react-router-dom"
export const Login = () => {
    return (<div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link to='/' className="navbar-brand" >
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
        {/* login section*/}
        <section className="contact_section layout_padding">
            <div className="design-box">
                <img src="images/design-2.png" alt="" />
            </div>
            <div className="container ">
                <div className="">
                    <h2 className="">Login</h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form action="">
                            <div>
                                <input type="text" placeholder="Username" />
                            </div>

                            <div>
                                <input type="password" placeholder="Password" />
                            </div>

                            <div className="d-flex ">
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*end login section*/}
    </div>
    )
}