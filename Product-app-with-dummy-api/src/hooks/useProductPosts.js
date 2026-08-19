import { useState, useEffect } from "react";
import { formatPost } from "../utils/formatPost";

export default function useProductPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    // Fetch data from API in parallel
    Promise.all([
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
      fetch("https://fakestoreapi.com/users").then((res) => res.json())
    ])
      .then(([products, users]) => {
        const formattedPosts = products.map((item, index) =>
          formatPost(item, users[index])
        );
        setPosts(formattedPosts);
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      });
  }, []);

  return { posts };
}