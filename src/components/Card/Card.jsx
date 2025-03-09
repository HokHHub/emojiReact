import './Card.css'

export default function Card(props) {

    return (
        <>
            <article className="emojies__card card">
                <p className="card__ico">{props.symbol}</p>
                <a href="#" className="card__name">{props.title}</a>
                <p className="card__description">{Array.from(new Set(props.keywords.split(' '))).join(' ')}</p>
            </article>
        </>
    )
}