import { useEffect } from "react";
import React, { useState } from "react";

export default function Secure({ user }) {
  console.log("Inside Secure page: ", user);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/posts", {
      method: "GET",
      headers: {
        authorization: user.id,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setPosts(data);
        }
      });
  }, [user.id]);

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li>
            <p>{post.title}</p>
            <p>{post.description}</p>
            <p>{post.user.email}</p>
          </li>
        );
      })}
    </ul>
  );
}
