import to from 'await-to-js';
import { observable, action, toJS } from 'mobx';

// * Types
import { TDirectory } from '../../../@types/Directory';
import { TDirectoriesData } from '../../../@types/stores/directoryStore';

// * Services
import { getDirectories } from '../../services/http';

class DirectoryStore {
  @observable directoriesData: TDirectoriesData = {
		success: true,
		data: [],
		totalCount: 0,
		pages: 0,
		page: 1,
		prev: 0,
		next: 0,
		hasPrevPage: false,
		hasNextPage: false,
  };

  constructor() {}

	@action getDirectoriesPageData = async () => {
		// Load data
    this.directoriesData.success = true;
		const [error, responseData] = await to<IObj>(getDirectories());
		if (error) {
			this.directoriesData.success = false;
			return;
		}

		this.directoriesData.totalCount = responseData.totalCount;
		this.directoriesData.pages = responseData.pages;
		this.directoriesData.page = 1;
		this.directoriesData.prev = responseData.prev;
		this.directoriesData.next = responseData.next;
		this.directoriesData.hasPrevPage = responseData.hasPrevPage;
		this.directoriesData.hasNextPage = responseData.hasNextPage;
		this.directoriesData.data = toJS(responseData.data);
  };

}

export default new DirectoryStore();
