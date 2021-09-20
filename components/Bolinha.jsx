import style from "../styles/Bolinha.module.css"
export default function Bolinha(props)
{
    let cores1 = ["yellow", "red", "blue", "green"];
    let cores2 = ["black", "black", "black", "black"];

    let pos = Math.floor(Math.random() * cores1.length);

    let cor1 = cores1[pos];
    let cor2 = cores2[pos];

    let cor3 = `radial-gradient(${cor1}, ${cor2})`;
    const cor = { backgroundImage: cor3 };

    return (
        <div style={cor} className={style.bolinha}>
            <span className={style.numero}>{props.numero}</span>
        </div>
    )

}