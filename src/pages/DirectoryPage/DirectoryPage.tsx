import { observer } from 'mobx-react';

// * Styles
import './style.scss';

// * Components
import { DirectoryComponent } from '../../components/Directory/Directory';

export default observer(() => {
	return(
		<DirectoryComponent></DirectoryComponent>
	);
});