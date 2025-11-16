import React from "react";

export default function ProfileCard({ profile }) {
  return (
    <section className="card profile-card">
      <h2>{profile.name}</h2>
      <p className="muted">{profile.role} • {profile.location}</p>
      <p>{profile.bio}</p>
      <button className="btn">View Projects</button>
    </section>
  );
}
