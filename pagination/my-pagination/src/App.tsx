import { useState, useEffect } from "react";
import { Post } from "./Types";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<[Post] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currrentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts(); // Call the function.
  }, []); //Empty array only runs when it mounts.

  console.log("POSTS", posts);

  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}

export default App;
