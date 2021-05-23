import { Post } from "../Types";

interface IPosts {
  posts: [Post];
  loading: number;
}
const Posts = ({ posts, loading }: IPosts) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className={"list-group mb-4"}>
      {Array.isArray(posts) &&
        posts.map((post) => (
          <li key={post.id} className={"list-group-item"}>
            {post.title}
          </li>
        ))}
    </ul>
  );
};
export default Posts;
