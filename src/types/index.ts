
export type UnsplashPhoto = {
    posteoAPI: Unsplash[];
}

export type Unsplash = {
  id: string;

  urls: {
    regular: string;
  };

  user: {
    username: string;
    name: string;
  };

  likes: number;



caption?: string;

  comments?: string[];

  date?: string;

  location?: string;

}




