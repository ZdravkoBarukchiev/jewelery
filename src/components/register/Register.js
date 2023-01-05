import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
export const Register = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(LoginContext);
    const search = (e) => {
        e.preventDefault()
        console.log('search');
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm-password");
        const url = "http://localhost:3030/users/register";
        if (password !== confirmPassword) {
            return;
        }
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((result) => {
                userLogin(result);
                navigate("/");
            });
    };
    return (
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
            {/* register section */}
            <section className="contact_section layout_padding">
                <div className="design-box">
                    <img src="images/design-2.png" alt="" />
                </div>
                <div className="container ">
                    <div className="">
                        <h2 className="">Register</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={onSubmit}>
                                <div>
                                    <input type="email" name='email' placeholder="Email" />
                                </div>
                                <div>
                                    <input type="password" name='password' placeholder="Password" />
                                </div>
                                <div>
                                    <input type="password" name='confirm-password' placeholder="Confirm Password" />
                                </div>
                                <div className="d-flex ">
                                    <button>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* end register section */}
        </div>
    )
}