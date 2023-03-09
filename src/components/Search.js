import React, { useState } from 'react'
import DATA from '../Data'
import { NavLink } from 'react-router-dom';

const Search = () => {
    const [filter, setFilter] = useState('');
    const SearchText = (event) => {
        setFilter(event.target.value);
    }
    let dataSearch = DATA.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12-mb-5'>
                    <div className='mb-3 col-4 mx-auto text-center'>
                        <input type="text" className='form-control' placeholder='Search' value={filter} onChange={SearchText.bind(this)} />
                        <div className="icon--search-black"></div>
                    </div>
                </div>
            </div>
            <div className="col-md-14">
                <div className="row">
                {dataSearch.map((item, index) => {
                    return (
                        <>
                            <div className="col-md-4 mb-4" key={item.id}>
                                <div class="card">
                                    <img src={item.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p>Price:{item.price}</p>
                                        
                                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-success">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
                </div>
            </div>
        </section>
    )
}

export default Search;