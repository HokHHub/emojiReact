import './Emojies.css'
import '/src/Container.css'
import Card from '../Card/Card'
export default function Emojies(props) {

    return (
        <div className="emojies">
            <div className="container">
                <div className="emojies__grid">
                    <Card input={props.input}/>
                </div>
            </div>
        </div >
    )
}