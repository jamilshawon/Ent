// pages/register.tsx
import { useState } from "react";
import Layout from '../components/Layout';  // Correct import for Layout component

import { useRouter } from "next/router";

import styles from "../styles/Register.module.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Submit the form data (you can add the API call to create a new account here)

    // Redirect to the homepage or login page after successful registration
    router.push("/");  // Redirect to homepage for example
  };

  return (
    <Layout>
    <div className={styles.registerContainer}>
      <h2>Create a New Account</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
      </form>
    </div>
      </Layout>
  );
}
