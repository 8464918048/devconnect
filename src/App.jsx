import React from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import PostList from "./components/PostList";

export default function App() {
  const profile = {
    name: "Dinesh B",
    role: "Frontend Developer",
    location: "Hyderabad, India",
    bio: "Strong JavaScript & React fundamentals. Curious about Next.js and backend integration."
  };

  const posts = [
    { id: 1, author: "Dinesh", text: "Built a small React portfolio app today." },
    { id: 2, author: "Dinesh", text: "Learning Next.js routing and SSG." }
  ];

  return (
    <div className="app">
      <Header />
      <main className="container">
        <div className="left">
          <ProfileCard profile={profile} />
        </div>
        <div className="right">
          <PostList posts={posts} />
        </div>
      </main>
      <footer className="footer">DevConnect — demo portfolio app</footer>
    </div>
  );
}
