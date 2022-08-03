import React from 'react';
import { TDirectory } from '../../../@types/Directory';

// *Styles
import './style.scss';

export const Card = (directory : TDirectory ) => {

  console.log('Card.tsx - 9  >>>>>>>>> directory: ', directory);

  return (
    <section className='container--card'>
      <div className='container--card__image' >
        <img src={directory.media} alt={directory.dv_name} className='directory-image' />
        <div className='card__image__cashback'>{directory.dv_cashback}
        </div>
      </div>
      <div className='container--card__content'>
        <div className='container--card__title'>
          <h3>{directory.name}</h3>
          <p>$ </p>
        </div>
        <p className='container--card__text'>Ready to rack up the points?</p>
      </div>
    </section>
  );
};
