"use client";

import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    // Demo only: no credentials are sent or stored.
    setSuccess(true);
    setPassword("");
  }

  return (
    <main className="page">
      <section className="left-panel">
        <div className="brand">A</div>

        <h1>
          Share everyday moments
          <br />
          with your <span>close friends.</span>
        </h1>

        <div className="illustration">
          <div className="photo photo-one">📸</div>
          <div className="photo photo-two">😊</div>
          <div className="photo photo-three">🌅</div>
          <div className="heart">❤️</div>
        </div>

        <p className="tagline">Connect. Share. Celebrate.</p>
      </section>

      <section className="right-panel">
        {success ? (
          <div className="success-box">
            <div className="success-icon">🎉</div>
            <h1>AI, Congratulations!</h1>
            <p>You are logged in successfully.</p>
            <button onClick={() => {
              setSuccess(false);
              setEmail("");
            }}>
              Back to login
            </button>
          </div>
        ) : (
          <div className="login-box">
            <h2>Welcome back</h2>
            <p className="subtitle">Log in to continue</p>

            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="login-button">
                Log in
              </button>
            </form>

            <p className="note">
              Demo login only — use test details.
            </p>

            <div className="divider">
              <span>Welcome to our community</span>
            </div>

            <button
              className="create-button"
              onClick={() =>
                alert("Connect your registration page here.")
              }
            >
              Create new account
            </button>
          </div>
        )}
      </section>
    </main>
  );
}