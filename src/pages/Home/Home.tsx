import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useState } from 'react';

// * Componenets
import { Searcher } from '../../components/Searcher/Searcher';

// * Styles
import './style.scss';

// * Store
import DirectoryStore from '../../stores/directoryStore';

export default observer(() => {
	const [loading, setLoading] = useState(false);
	const { directoriesData, getDirectoriesPageData } = DirectoryStore;
	

	const getDirectories = async () => {
    await getDirectories();
  };

	useEffect(() => {
    setLoading(true);
    getDirectoriesPageData().then((response) => {
      setLoading(false);
    });
  }, []);

	useEffect(() => {
		console.log('Home.tsx - 16  >>>>>>>>> directoriesData: ', directoriesData);
		console.log('\nHome.tsx - 31 directoriesData >>> \n', directoriesData.data);
  }, [directoriesData]);
	


	return (
		<div className='container--home'>
			<h1>Recompensas</h1>
			<Searcher></Searcher>
			<div className='container--cards'>
				<h2>Recompensas pensadas en ti</h2>

				<div className="parent">
					<div className="child">Child</div>
					<div className="child">Child</div>
					<div className="child">Child</div>
					<div className="child">Child</div>
					<div className="child">Child</div>
					<div className="child">Child</div>
					<div className="child">Child</div>
					<div className="child">Child</div>
				</div>

			</div>
			
		</div>
	);

});