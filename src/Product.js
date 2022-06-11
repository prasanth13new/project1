import React from "react";

function Product(props) {
    return (
        <div className='col-lg-3 mb-3'>
            <div className='card' style={{ width: '18rem' }}>
                <img src="https://via.placeholder.com/200x150" className='card-img-top' alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.pData.title}</h5>
                    <h6>{props.pData.price}</h6>
                    {
                        props.pData.isStock === true ? <span>In Stock</span> : <span>Out of Stock</span>
                    }
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button
                        disabled={!props.pData.isStock}
                        onClick={() => props.handleShowPrice(props.pData)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;