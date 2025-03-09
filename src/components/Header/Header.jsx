import './Header.css'
import '/src/Container.css'

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__text text">
                        <h1 className="text__title">Emoji Finder</h1>
                        <p className="text__subtitle">Find emoji by keywords</p>
                    </div>
                </div>
            </header>
            
        </>
    )
}
