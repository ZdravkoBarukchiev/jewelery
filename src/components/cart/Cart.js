import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation"

export const Cart = () => {
    
    return (
        <div className="hero_area">
            <HeaderNavigation />
            <section className="contact_section layout_padding">
                <div className="design-box">
                    <img src="images/design-2.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex ">
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}