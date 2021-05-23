import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import Headers from './components/Headers';
import { Post } from "./Types";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<[Post] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currrentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts(); // Call the function.
  }, []); //Empty array only runs when it mounts.

  // Get current posts
  const indexOfLastPost = currrentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts: [Post] = posts.slice(
    indexOfFirstPost,
    indexOfLastPost
  ) as [Post];

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={"container mt-5"}>
      <h1>My App</h1>
      <Headers />
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
