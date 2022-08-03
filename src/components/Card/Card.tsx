import { useEffect, useState } from 'react';
import { toJS } from 'mobx';

// *Types 
import { TDirectory } from '../../../@types/Directory';

// *Styles
import './style.scss';

// *Enum
import { categoryBackground } from '../../stores/utils/enums/categories';

export const Card = (directory : TDirectory ) => {
  const [imgCategory, setImgCategory] = useState('');
  const [reward, setReward] = useState('');
  const [coordenadas, setCoordenadas] = useState([]);
  const imageCat = categoryBackground.filter((img)=> img.category === directory.raw_category );

  useEffect(() => {
    setImgCategory(imageCat[0].url);
    // eslint-disable-next-line

    setReward(directory.quickType === 'first_time'? 'Recompensa de Bienvenida' : 'Recompensa Recurrente');
    // eslint-disable-next-line

    const coor = toJS(directory.dv_latlng);
    setCoordenadas(coor);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      { imgCategory ? (
        <>
          <section className='container--card'>            
            <div className='container--card__image' style={{ backgroundImage: 'url(' + imgCategory + ')' }} >
              <div className='card--logo'><img src={directory.media} alt={directory.dv_name} className='directory-image' /></div>
              <div className='card__image__cashback'><span>{directory.dv_cashback} CASHBACK</span></div>
            </div>

            <div className='container--card__content'>
              <div className='container--card__title'>
                <div className='title--left'>
                  <h3>{directory.name}</h3>
                </div>
                <div className='title--right' >
                  <p className='txt-money'>$•</p>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color="#FFD700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
                  <p className='txt-rating'>{directory.rating}</p>
                </div>
              </div>
              <div className='container--category'>
                <p className='category--name'>{directory.dv_category}</p>
              </div>
              <div className='container--reward'>
                <p className='reward--name'>{reward}</p>
              </div>
              <div className='container--location'>
                <div className='location-right'>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${coordenadas[1]},${coordenadas[0]}`} target="_blank" rel="noopener noreferrer" className='ulr-location'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" color="#2E58FF" fontSize="1.2rem" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.087 20.914c-.353 0-1.219-.146-1.668-1.496l-1.209-3.627-3.628-1.209c-1.244-.415-1.469-1.172-1.493-1.587s.114-1.193 1.302-1.747l11.375-5.309c1.031-.479 1.922-.309 2.348.362.224.351.396.97-.053 1.933l-5.309 11.375c-.529 1.135-1.272 1.305-1.665 1.305zm-5.39-8.068l4.094 1.363 1.365 4.093 4.775-10.233-10.234 4.777z"></path></svg>
                    Locación
                  </a>
                </div>
                <div className='location-left'>
                  <a href={directory.media} className='conoce-mas' target="_blank" rel="noopener noreferrer">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="#2E58FF" fontSize="1rem" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    Conoce más
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )
      : null }
    </>
  );
};
