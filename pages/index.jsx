import { useState } from "react";
import Cartao from "../components/Cartao"
import styles from "../styles/Home.module.css"

export default function Home()
{
  let num = [];

  const [qtde, setQtde] = useState(6);

  criaNumeros();

  function alteraQtde(e)
  {
    setQtde(e.target.value);
    criaNumeros();
  }

  function criaNumeros()
  {
    num = [];
    for (let i = 1; i <= qtde; i++)
    {
      let n = Math.trunc(Math.random() * 60);
      num.push(n);
    }
  }

  return (
    <div className={styles.container}>
      <Cartao numeros={num}>
      </Cartao>
      <input type="number" name="" id="" value={qtde} onChange={alteraQtde} />
    </div>
  )
}
