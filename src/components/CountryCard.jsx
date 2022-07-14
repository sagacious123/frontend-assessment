import React from 'react'

const CountryCard = ({ country }) => {
  return (
    <div className='country-card'>
        <figure>
            <img src={country.flags.png} alt="" />
        </figure>
        <figcaption>
            <h4>{country.name.common}</h4>
        </figcaption>
    </div>
  )
}

export default CountryCard
