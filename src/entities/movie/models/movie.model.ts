export interface IMovie {
  id: string;
  title: string;
  poster: string;
  year: string;
  country: string;
  description?: string;
  categoryIds: string[];
  duration: string;
}
