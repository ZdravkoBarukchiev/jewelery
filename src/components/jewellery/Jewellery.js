import { Link } from "react-router-dom";
import { HeaderNavigation } from "../headerNavigation/HeaderNavigation";
import { FooterSection } from "../footerSection/FooterSectoin";
import { InfoSection } from "../infoSection/InfoSection";
import { JewelleryItem } from "./jewelleryItem/JewelleryItem";
import { useState, useEffect } from "react";

export const Jewellery = () => {
    const [jewellery, setJewellery] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3030/data/jewellery")
            .then((res) => res.json())
            .then((result) => setJewellery(result));
    }, []);
    console.log(jewellery);

    return (<body class="sub_page">
        <div className="hero_area">
            <HeaderNavigation />
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
                    {jewellery.map((x) =>
                        <JewelleryItem name={x.title} price={x.price} image={x.imageUrl} />
                    )}
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
        <InfoSection />
        <FooterSection />
    </body>)


}