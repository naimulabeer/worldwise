import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";

function Login() {
  // PRE-FILL FOR dev purposes
  const [email, setEmail] = useState("abeer@example.com");
  const [password, setPassword] = useState("abeer");

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </main>
  );
}

export default Login;
