import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,capital} = props.country;
    return (
        <div className='country'>
            <h1>Country Name:{name.common}</h1>
            <h3>population:{population}</h3>
            <h2>population:{capital}</h2>
        </div>
    );
};

export default Country;