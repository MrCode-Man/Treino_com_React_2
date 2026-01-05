import imagem from '../../assets/images/design-center.jpg'
import './SectionOne.css'

function SectionOne() {
    return (
        <div className='praFoto'
             style={{backgroundImage: `url(${imagem})`}}></div>
    )
}

export default SectionOne;