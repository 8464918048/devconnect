import React from "react";

export default function PostList({ posts }) {
  return (
    <section className="card posts">
      <h3>Recent posts</h3>
      {posts.map(p => (
        <article key={p.id} className="post">
          <strong>{p.author}</strong>
          <p>{p.text}</p>
        </article>
      ))}
    </section>
  );
}
