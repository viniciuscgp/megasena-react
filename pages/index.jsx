import { useState } from "react";
import Cartao from "../components/Cartao"
import styles from "../styles/Home.module.css"

export default function Home()
{
  const [qtde, setQtde] = useState(6);

  criaNumeros();

  function alteraQtde(e)
  {
    setQtde(e.target.value);
    criaNumeros();
  }

  function criaNumeros()
  {
    let num = [];
    let i = 1;
    while (i <= qtde)
    {
      let n = Math.trunc(Math.random() * 60);
      if (num.includes(n))
        continue;
      num.push(n);
      i++;
    }
    num.sort((n1, n2) => n1 - n2);
    return num;
  }

  return (
    <div className={styles.container}>
      <Cartao numeros={criaNumeros()}>
      </Cartao>
      <input type="number" name="" id="" value={qtde} onChange={alteraQtde} />
    </div>
  )
}
