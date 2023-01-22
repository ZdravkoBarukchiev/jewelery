import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
import { loginService } from "../../services/loginService";

export const Register = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(LoginContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirm-password");
        if (password !== confirmPassword) {
            return;
        }
        loginService("register", email, password)
            .then((result) => {
                userLogin(result);
                navigate("/");
            });
    };

    return (
        <div className="hero_area">
            <HeaderNavigation />
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
        </div>
    )
}