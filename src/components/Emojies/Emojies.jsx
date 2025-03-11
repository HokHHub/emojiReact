import './Emojies.css'
import '/src/Container.css'
import Card from '../Card/Card'
import { data } from '/src/data.js'
import { useEffect, useState } from 'react'

export default function Emojies(props) {
    const count = 16
    const [loading, setLoading] = useState(false)
    let [limiter, setLimiter] = useState(16)

    useEffect(() => {
        function handleScroll() {
            if (!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
                console.log(window.innerHeight, window.scrollY, document.body.scrollHeight);

                setLoading(true)

                setLimiter((prev) => Math.min(prev + count, data.length))

                setLoading(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [data.length, loading])

    return (
        <div className="emojies">
            <div className="container">
                <div className="emojies__grid">
                    {props.input == '' &&
                        data.slice(0, limiter).map((el) => {
                            if ((props.input) == '' || (el.title).toLowerCase().includes(props.input) || (el.keywords).toLowerCase().includes(props.input)) {
                                return <Card key={el.title} input={props.input} data={data} title={el.title} keywords={el.keywords} symbol={el.symbol} />
                            }
                        })

                    }
                    {data.map((el) => {
                        if (((el.title).toLowerCase().includes(props.input) || (el.keywords).toLowerCase().includes(props.input)) && (props.input) != '') {
                            return <Card key={el.title} input={props.input} data={data} title={el.title} keywords={el.keywords} symbol={el.symbol} />
                        }
                    })}
                </div>
                <div className='andDiv'>
                    {limiter < data.length && (loading && <p style={{ 'color': '#087990', 'fontSize': '30px' }}>Loading...</p>)}
                    {/* {(limiter < data.length && props.input == '') &&
                        <button onClick={() => setLimiter(limiter += count)} className='andButton'>Еще</button>
                    } */}
                </div>
            </div>
        </div >
    )
}