export type PropsListado = {
    posts: Post[];
}

export type Post = {
    user: string;
    url: string;
    likes: number;
    suscriptores: number;
    description: string;
}