import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch, useSelector } from 'react-redux';
import {addCart, delCart} from '../redux/actions/index'
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

const ProductDetail = () => {

    const [cartButton, setCartBtn] = useState("Add to Cart")
    const productId = useParams();
    const productDetail = DATA.filter(x => x.id == productId.id)
    const product = productDetail[0];
    const productDetails = DATA.filter(y => y.id == productId.id)
    const products = productDetails[0];
    console.log(products);

    const dispatch = useDispatch();
    const state = useSelector((state) => state.handleCart);

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    {_.map(state, products => {
            return (
                <>                    
                    <div>
                        <button className="btn btn-outline-dark" onClick={() => handleDel(products)}>-
                            <i className="fa fa-minus"></i>
                        </button>

                            {products.qty}

                        <button className="btn btn-outline-dark" onClick={() => handleAdd(products)}>+
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </>
            )
        })
    }

    const producthandleCart = (product) => {
        if (cartButton === "Add to Cart") {
            dispatch(addCart(product))
            setCartBtn("Remove")
        }
        else {
            dispatch(delCart(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">Price:{product.price}</h2>
                        <p className="lead">{product.desc}</p>
                        <div>
                            <button className="btn btn-outline-danger me-4" onClick={() => handleDel(products)}>-
                                <i className="fa minus"></i>
                            </button>

                            {product.qty}

                            <button className="btn btn-outline-success" onClick={() => handleAdd(products)}>+
                                <i className="fa plus"></i>
                            </button>
                        </div>

                        <button onClick={() => producthandleCart(product)} className="btn btn-outline-success my-5">{cartButton}</button>
                        <NavLink to="/cart" className="btn btn-success ms-2 px-3 py-2">
                            Go to Cart
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail