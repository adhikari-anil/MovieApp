export type Movie = {
  original_title?: string;
  original_name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: string;
  poster_path: string;
};

export interface IMenuProps {
  name: string;
  icon: JSX.Element;
  path: string;
  isToggle: boolean;
}

export type VideoResponse = {
  id: string;
  iso_639_1: string; // Language code (e.g., "en")
  iso_3166_1: string; // Country code (e.g., "US")
  key: string; // Video key (e.g., YouTube video ID)
  name: string; // Video title (e.g., "Trailer")
  official: boolean; // Whether it's the official video
  published_at: string; // ISO date string
  site: string; // Hosting site (e.g., "YouTube")
  size: number; // Video resolution (e.g., 2160 for 4K)
  type: string; // Video type (e.g., "Trailer", "Teaser")
};
