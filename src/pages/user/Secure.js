import { useEffect } from "react";
import React, { useState } from "react";

export default function Secure() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("Inside Secure page: ", token);

    fetch("http://localhost:3030/posts", {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setPosts(data);
        }
      });
  }, []);

  return (
    <ul>
      {posts.map((post, index) => {
        return (
          <li key={index}>
            <p>{post.title}</p>
            <p>{post.description}</p>
            <p>{post.user.email}</p>
          </li>
        );
      })}
    </ul>
  );
}
