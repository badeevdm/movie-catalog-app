export interface IMovie {
  id: number;
  title: string;
  poster: string;
  year: number;
  country: string;
  description?: string;
  categoryIds: number[];
  duration: string;
}
