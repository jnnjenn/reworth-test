import React from 'react';
import { FaStar, FaDollarSign, FaRegClock, FaSlidersH } from 'react-icons/fa';

// *Styles
import './style.scss';

export const Searcher = () => {

	const btnFilterBetterRating = () => {
		console.log('Searcher.tsx - 10  >>>>>>>>> ');
	}

	const btnFilterMostCashback = () => {
		console.log('Searcher.tsx - 14  >>>>>>>>> ');
	}

	const btnFilterRecent = () => {
		console.log('Searcher.tsx - 18  >>>>>>>>> ');
	}

  return (
    <section className='container--searcher'>
      <button className='button button-left' onClick={btnFilterBetterRating} ><FaStar /> Mejor Rating</button>
			<button className='button button-middle' onClick={btnFilterMostCashback} ><FaDollarSign /> Mayor Cashback</button>
			<button className='button button-middle' onClick={btnFilterRecent} ><FaRegClock /> Recién Agregados</button>
			<button className='button button-right'> <FaSlidersH /> </button>
    </section>
  );
};
