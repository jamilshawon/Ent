import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Auth.module.css"; // Adjust if you rename to Auth.module.css
import Layout from "../components/Layout";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate sign-in (replace with real auth logic)
    if (email && password) {
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
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Your password"
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Sign In
          </button>
        </form>

        <p className={styles["form-footer"]}>
          Don’t have an account?{" "}
          <Link href="/register" className={styles.link}>
            Register
          </Link>
        </p>
      </div>
    </Layout>
  );
}
