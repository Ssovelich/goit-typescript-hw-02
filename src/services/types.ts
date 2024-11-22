export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
  description: string;
  alt_description: string;
  likes: number;
}

export interface Api {
  results: Image[];
  total_pages: number;
  query: string;
}
