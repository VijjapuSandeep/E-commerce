
import { useState } from "react";
import DATA from "../Data";
// import Search from "./search";
import _ from 'lodash';
import { NavLink } from 'react-router-dom';
import "./Autocomplete.css";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import LaptopIcon from '@mui/icons-material/Laptop';
import Stack from '@mui/material/Stack';
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Autocomplete = () => {
  const [classnames, setClassnames] = useState('grid1');
  const [classnames2, setClassnames2] = useState('container1');

  const changeGrid1 = () => {

    setClassnames('grid1');
    setClassnames2('container1');
  }

  const changeGrid2 = () => {

    setClassnames('grid2');
    setClassnames2('container2');
  }

  const [searchInput, setSearchInput] = useState("");
  const searchBarHandler = (e) => {
    let input = e.target.value;
    setSearchInput(input);
  };
  let datSearch = _.filter(DATA, prod => {
    return Object.keys(prod).some(key =>
      prod[key].toString().toLowerCase().includes(searchInput.toString().toLowerCase()))
  });
  console.log(datSearch);

  return (
    <>
      <div className="App">
        <div className="search-container">
          <div className="search-inner">
            <input type="text" className='form-control' placeholder='Search' value={searchInput} onChange={searchBarHandler.bind(this)} />
          </div>
        </div>
      </div>
      <div >
        <Stack direction="row" spacing={4}>
          {datSearch.length !== 1 ?
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton id="tbg-radio-1" onClick={changeGrid1} value={1}><PhoneAndroidIcon/></ToggleButton>
              <ToggleButton id="tbg-radio-2" onClick={changeGrid2} value={2}><LaptopIcon/></ToggleButton>
            </ToggleButtonGroup> : null
          }
        </Stack>
      </div>

      {DATA
        .filter((prod) => {
          const searchTerm = searchInput.toLowerCase();
          const title = prod.title.toLowerCase();
          if (searchTerm.length > 2) {
            return (
              searchTerm &&
              title.startsWith(searchTerm) &&
              title !== searchTerm
            );
          }
        })
        .map((prod) => (
          <NavLink to={`/products/${prod.id}`} style={{ textDecoration: "none", color: "black" }}>
            <div className="dropdown-row">{prod.title}</div>
          </NavLink >
        )
        )}

      <div className={classnames}>
        <div className={classnames2}>
          <div className="col-md-14">
            <div className="row">
              {_.map(datSearch, prod => {

                return (
                  <>
                    <div className="col-md-4 mb-4" key={prod.id}>
                      <div class="card">
                        <img src={prod.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{prod.title}</h5>
                          <p>Price:{prod.price}</p>
                          <NavLink to={`/products/${prod.id}`} class="btn btn-outline-success">Buy Now</NavLink>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Autocomplete;