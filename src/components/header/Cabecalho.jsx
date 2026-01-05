import './Cabecalho.css'
import design from '../../assets/icons/ideia.svg'
import LinksHeader from './Navbar.jsx'

function Cabecalho() {
    return (
        <div className='header'>
            <img className='logoSVG' src={design} alt='the design center'></img>
            <LinksHeader/>
        </div>
    )
}

export default Cabecalho;