
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
}






export type PropsListado = {
    posteo: Listado[];
}


export interface Listado {
  id: number;
  caption: string;

  comments: string[];

  date: string;

  location: string;
}