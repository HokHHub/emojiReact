import './Emojies.css'
import '/src/Container.css'
import Card from '../Card/Card'
import { data } from '/src/data.js'

export default function Emojies(props) {
    return (
        <div className="emojies">
            <div className="container">
                <div className="emojies__grid">
                    {data.map((el) => {
                        
                        if ((props.input) == '' || (el.title).toLowerCase().includes(props.input) || (el.keywords).toLowerCase().includes(props.input)) {
                            return <Card key={el.title} input={props.input} data={data} title={el.title} keywords={el.keywords} symbol={el.symbol} />
                        }
                    })}
                </div>
            </div>
        </div >
    )
}