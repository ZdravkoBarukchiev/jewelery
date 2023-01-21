import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";
export const Login = () => {
    const { userLogin } = useContext(LoginContext);
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault()
        const { email, password } = Object.fromEntries(new FormData(e.target));

        const url = "http://localhost:3030/users/login";
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((result) => {
                userLogin(result);
                navigate('/');
            });

    }
    return (<div className="hero_area">
        <HeaderNavigation />
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
                        <form onSubmit={onSubmit}>
                            <div>
                                <input type="email" name='email' placeholder="Email" />
                            </div>

                            <div>
                                <input type="password" name='password' placeholder="Password" />
                            </div>

                            <div className="d-flex ">
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}