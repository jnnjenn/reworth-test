import { TDirectory } from '../../Directory';

export type TDirectoriesData = {
  success?: boolean,
  data?: TDirectory[];
  totalCount?: number;
  pages?: number;
  page?: number;
  prev?: number;
  next?: number;
  hasPrevPage?: boolean;
	hasNextPage?: boolean;
};
