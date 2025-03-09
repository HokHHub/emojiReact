import './Card.css'
import { data } from '/src/data.js'

export default function Card(props) {
    console.log(props.input);
    
    return (
        <>
            {data.map((el) => {
                // console.log(input.input);
                
                if ((props.input).toLowerCase() == '' || (el.title).toLowerCase().includes(props.input)) {
                    return (<>
                        <article className="emojies__card card" key={el.keywords}>
                            <p key={el.symbol} className="card__ico">{el.symbol}</p>
                            <a key={el.title} href="#" className="card__name">{el.title}</a>
                            <p key={el.keywords} className="card__description">{el.keywords}</p>
                        </article>
                    </>)
                }
                
            })}
        </>
    )
}