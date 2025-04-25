// pages/signin.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Register.module.css"; // or your own signin style
import Layout from "../components/Layout"; 


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fake login logic (add real auth later)
    if (email && password) {
      // Redirect to homepage after login
      router.push("/");
    }
  };

  return (
    <Layout>
    <div className={styles.registerContainer}>
      <h2>Sign In to Your Account</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
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

        <button type="submit" className={styles.submitBtn}>Sign In</button>
      </form>

      <p className={styles["form-footer"]}>
        Don’t have an account? <a href="/register">Register</a>
      </p>
    </div>
      </Layout>
  );
}
