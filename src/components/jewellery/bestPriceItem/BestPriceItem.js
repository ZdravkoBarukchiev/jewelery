export const BestPriceItem = ({ name, price, image }) => {
    return (
        <div className="box">
            <div className="price">
                <h6>{price}$</h6>
            </div>
            <div className="img-box">
                <img src={image} alt="" />
            </div>
            <div className="name">
                <h5>{name}</h5>
            </div>
        </div>
    )
}