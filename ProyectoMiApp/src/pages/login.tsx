import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/pages/home.module.css";
import Head from "next/head";
import { authenticate } from "@/utils/auth";


const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
    if (error) setError("");
  }; // limpiar error al escribir
  const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError("");
  };

  const handleClick = () => {
    if (!user || !password) {
      setError("Debe ingresar usuario y contraseña");
      return;
    }

    const usuario = authenticate(user, password);
    if (!usuario) {
      setError("Usuario o contraseña incorrectas");
      setPassword("");
      return;
    }

    router.push("/dashboard"); // login exitoso

    console.log("Se hizo click");
    console.log(user);
    console.log(password);
  };

  return (
    <div>
      <Head>
        <title>EcoStyle</title>
        <meta
          name="description"
          content="Inicia sesión en EcoStyle, tu e-commerce ecoamigable."
        />
      </Head>

      <div className={styles.title}>Login</div>
      <div className={styles.container}>
        <label className={styles.label}>Enter your username</label>
        <input
          type="text"
          value={user}
          onChange={handleChangeUser}
          className={styles.input}
        />

        <label className={styles.label}>Enter your password</label>
        <input
          type="password"
          value={password}
          onChange={handleChangePass}
          className={styles.input}
        />

        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
