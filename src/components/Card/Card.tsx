import { TDirectory } from '../../../@types/Directory';

// *Styles
import './style.scss';

// *Enum
import { categoryBackground } from '../../stores/utils/enums/categories';
import { useEffect, useState } from 'react';

export const Card = (directory : TDirectory ) => {
  const [imgCategory, setImgCategory] = useState('');

  useEffect(() => {
    const imageCat = categoryBackground.filter((img)=> img.category === directory.raw_category );
    setImgCategory(imageCat[0].url);
    // eslint-disable-next-line
  }, []);

  return (
    <section className='container--card'>
      <div className='container--card__image' >
        <img src={imgCategory} alt={directory.dv_name} className='directory-image' />
        {/* <img src={directory.media} alt={directory.dv_name} className='directory-image' /> */}
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
