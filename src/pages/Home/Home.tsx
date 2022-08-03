import { observer } from 'mobx-react';
import { useCallback, useEffect, useState } from 'react';

// * Componenets
import { Searcher } from '../../components/Searcher/Searcher';

// * Styles
import './style.scss';

// * Store
import DirectoryStore from '../../stores/directoryStore';
import { Card } from '../../components/Card/Card';
import { toJS } from 'mobx';
import { DirectoryComponent } from '../../components/Directory/Directory';

export default observer(() => {
	const [loading, setLoading] = useState(false);
	const { directoriesData, getDirectoriesData } = DirectoryStore;

	useEffect(() => {
    setLoading(true);
    getDirectoriesData();
    setLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

	const renderDirectories = useCallback((): JSX.Element[] => {
    const directoriesList = directoriesData.data.map((directory, indexDirectory) => {
			return <Card key={indexDirectory} {...directory} />
		});
		return directoriesList;
  }, [directoriesData]);

	return (
		(!loading ? 
			<div className='container--home'>
				<h1>Recompensas</h1>
				<Searcher></Searcher>
				<div className='container--cards'>
					<h2>Recompensas pensadas en ti</h2>
					<div className="container--allcards">
						{ directoriesData.data.length ? renderDirectories() : null }
					</div>
				</div>				
			</div> 
			: null)
	);

});