import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";
import Dropdown from 'react-bootstrap/Dropdown';
import _ from 'lodash';

const Category = () => {
  const [data, setData] = useState(DATA);
  const [rate, setRate] = useState('');
  const filterResult = (catItems) => {
    const result = _.filter(DATA, currentData => {
      return currentData.Category === catItems;
    });
    setData(result);
  }
  const PriceHighToLow = () => {
    DATA.sort((a, b) => { return (a.price - b.price) });
    console.log(DATA);
    setRate('Low');
  }

  const PriceLowToHigh = () => {
    DATA.sort((a, b) => { return (b.price - a.price) });
    console.log(DATA);
    setRate('High');
  }

  useEffect(() => {
    console.log(rate);

  }, [rate]); 

  return (
    <>
      <div className="container py-5">
        <div>
          <button className=" btn btn-success " onClick={() => filterResult('Mobiles')}>Mobiles</button> <span />
          <button className=" btn btn-primary " onClick={() => filterResult('Laptops')}>Laptops</button> <span />
          <button className=" btn btn-danger " onClick={() => setData(DATA)}>ALL</button>
        </div>
        <h2 style={{ position: 'relative', top: -40, left: 230 }}>SortByPrice</h2>
        <Dropdown style={{ position: 'relative', top: -80, left: 420 }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort By
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={PriceHighToLow}>Price : Low To High</Dropdown.Item>
            <Dropdown.Item onClick={PriceLowToHigh}>Price : High To Low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="container">
        <div className="row">
          {_.map(data, values => {
            const { id, title, price, img } = values;
            return (
              <>
                <div className="col-md-4 mb-4" key={id}>
                  <div class="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p>Description:</p>
                      <p>Price:{price}</p>
                      <NavLink to={`/products/${id}`} class="btn btn-outline-success">Buy Now</NavLink>
                    </div>
                  </div>
                </div>
              </>
              )
            })}
        </div>
      </div>
    </>
  )
}
export default Category;
