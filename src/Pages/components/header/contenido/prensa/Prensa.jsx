import './Prensa.css'
import PrensaInfo from './Prensa.json'
import { Link } from 'react-router-dom'
import Pua from '../../../../../../public/Pua.png'


function Prensa() {

    return (
        <>
            <main className='prensagral'>
            <h2>Prensa</h2>
                {PrensaInfo.map((item, index) => (
                    <div key={index}>
                        <ul>
                            <li id='contenido-prensa'>
                                <img src={Pua} alt="" />
                                <Link to={`/prensa/${item.id}`}>{item.info}</Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </main>
        </>
    )
}

export default Prensa
