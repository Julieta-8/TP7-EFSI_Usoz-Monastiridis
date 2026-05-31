export interface UnsplashPhoto {
  id: string;

  urls: {
    regular: string;
  };

  user: {
    username: string;
    name: string;
  };

  likes: number;
}