
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
    caption ?: string;

  comments ? : string[];

  date ? : string;

  location ? : string;
}




/*

export type PropsListado = {
    posteo: Listado[];
}


export interface Listado {
  id: string;
  caption: string;

  comments: string[];

  date: string;

  location: string;
}
*/




///////////////////
export type PropsFeed = {
  postAPI: Unsplash[];
  /*posteo: Listado[];*/
};
export type PropsStories = {
  postAPI: Unsplash[];
};

export type PropsPosteos = {
  post: Unsplash;
  setPosteoSeleccionado: React.Dispatch<
    React.SetStateAction<string | null>
  >;
};
export type PropsPerfil ={
  postAPI:Unsplash[];
}
export type PropsPost = {
  posteoSeleccionado: string;
  setPosteoSeleccionado: React.Dispatch<
    React.SetStateAction<string | null>
  >;
  postAPI: Unsplash[];
 /* posteo: Listado[];*/
};