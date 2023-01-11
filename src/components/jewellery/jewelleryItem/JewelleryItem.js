import { Link } from "react-router-dom"
export const JewelleryItem = ({ name, price, image }) => {
    return (
        <div className="box">
            <div className="name">
                <h6>{name}</h6>
            </div>
            <div className="img-box">
                <img src={image} alt="" />
            </div>
            <div className="detail-box">
                <h5>
                    $<span>{price}</span>
                </h5>
                <Link to="/">Buy Now</Link>
            </div>
        </div>
    )
}