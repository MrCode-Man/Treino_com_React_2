import './Cabecalho.css'
import LinksHeader from './LinksHeader.jsx'
import design      from '../../assets/icons/ideia.svg'
import Formas      from "./Formas.jsx";

function Cabecalho() {
    return (
        <div className='header'>
            <Formas/>
            <img className='logoSVG' src={design} alt='the design center'></img>
            <LinksHeader/>
        </div>
    )
}

export default Cabecalho;
