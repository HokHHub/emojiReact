import './Form.css'

export default function Form(props) {
    return (
        <form className="form">
            <input onKeyUp={props.func} className="form__input" type="text" placeholder="Placeholder" id="input" />
        </form>
    )
}