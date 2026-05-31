const Post = ({
  post,
  onSelectPost
}: PostProps) => {

  return (

    <div
      onClick={() => onSelectPost(post)}
    >

      <h3>
        @{post.user.username}
      </h3>

      <img
        src={post.urls.regular}
        alt=""
      />

      <p>
        ❤ {post.likes}
      </p>

    </div>

  );
};