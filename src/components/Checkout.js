import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.handleCart)
    var total = 0;
    var ship = 0;

    const itemList = (item) => {

        total = total + item.qty * item.price;
        if (total < 500) {
            ship = total + 50;
            console.log("shipping charges apply", ship);
        }
        else if (total > 500) {
            ship = 0;
        }

        return (
            <li className="list-group-item d-flex justify-content-between">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="my-0">{item.qty}</span>
                <span className="text-muted">{item.qty * item.price}</span>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between ">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>${total}</strong><br></br><hr></hr>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>DeliveryCharges apply</strong>
                                <strong>$ {ship}</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-7">
                        <h4 className="mb-3">Billing address</h4>
                        <form>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="first name" required="" />
                                </div>

                                <div className="col-sm-6">
                                    <label className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="last name" required="" />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" required="" />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2" />
                                </div>

                                <div className="col-md-5">
                                    <label className="form-label">Country</label>
                                    <input type="text" className="form-control" id="country" required="" />
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label">State</label>
                                    <input type="text" className="form-control" id="state" required="" />
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label className="form-label">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                    <small className="text-muted">Full name as displayed on card</small>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label"> Card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="XXXX XXXX XXXX" required="" />
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="XX/XX" required="" />
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="XXX" required="" />
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout