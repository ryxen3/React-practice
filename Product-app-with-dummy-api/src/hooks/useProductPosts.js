import { useState, useEffect } from "react";

export default function useProductPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch products and users from FakeStore API
    Promise.all([
      fetch("https://fakestoreapi.com/products").then((res) => {
        return res.json();
      }),
      fetch("https://fakestoreapi.com/users").then((res) => {
        return res.json();
      })
    ])
      .then((results) => {
        const products = results[0];
        const users = results[1];

        // Match each product with a user by index
        const formattedPosts = products.map((item, index) => {
          const user = users[index];
          const username = user ? user.username : "Rafid"; // default username for no user information on API

          return {
            id: item.id,
            topic: item.category,
            title: item.title,
            shortDescription: item.description.slice(0, 100) + "...",
            longDescription: item.description,
            name: username,
            rating: item.rating.rate,
            ratingCount: item.rating.count,
            image: item.image
          };
        });

        setPosts(formattedPosts);
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      });
  }, []); // runs only once

  return { posts };
}