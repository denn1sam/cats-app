import { Breed } from './breed';
import { Categories } from './categories';

export interface Cat {
  id: string;
  url: string;
  sub_id?: string;
  created_at?: string;
  original_filename?: string;
  categories: Categories[];
  breeds: Breed[];
}
