import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Tip } from "./components/Tips/index";
import { Letter } from "./components/Letter/index";
import { Input } from "./components/Input/index";
import { Button } from "./components/Button/Index";
import { LettersUsed } from "./components/Letters";

export default function App() {
  function handleRestartGame() {
    alert("Reuniciar o jogo!");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais utilizadas" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar"></Button>
        </div>{" "}
        <LettersUsed />
      </main>
    </div>
  );
}
