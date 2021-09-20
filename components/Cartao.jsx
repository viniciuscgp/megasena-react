import style from "../styles/Cartao.module.css"
import Bolinha from "./Bolinha";
export default function Cartao(props)
{
    let numeros = props.numeros.map(n => <Bolinha numero={n} />);

    return (
        <div>
            <div className={style.titulo}>Números da Sorte</div>
            <div className={style.cartao}>
                {numeros}
            </div>
        </div>
    );
}
