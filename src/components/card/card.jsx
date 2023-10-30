import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

import Datalocation from '../../assets/location.json';

function Card() {
  return (
    <section className='cont-card'>
      {Datalocation.map((location) => (
        <Link to={`/location/${location.id}`} key={location.id}>
          <figure className='content'>
            <img className='img-card' src={location.cover} alt={location.title} />
            <div className='gradient-card'></div>
            <figcaption className='title-card'>{location.title}</figcaption>
          </figure>
        </Link>
      ))}
    </section>
  );
}

export default Card;       