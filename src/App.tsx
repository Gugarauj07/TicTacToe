import styles from "./styles/Home.module.css";
import Board from "./containers/Board";

export default function App() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Board />
      </main>
    </div>
  );
}