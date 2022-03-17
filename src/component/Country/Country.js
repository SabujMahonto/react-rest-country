import React from 'react';
import './Country.css'

const Country = (props) => {

    const {name,population,capital,flags} = props.country;
    return (
        <div className='country'>
            <h1>Name:{name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>population:{population}</h3>
            <h2>population:{capital}</h2>
        </div>
    );
};

export default Country;