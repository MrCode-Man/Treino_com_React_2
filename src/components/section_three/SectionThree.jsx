import './SectionThree.css'
import FAQ from './FAQ/FAQ.jsx'
import {palavras}  from './FAQ/MatrizPalavras.js'

function SectionThree() {
    return (
        <section className='SectionThree'>
            <h2 className="titulo_section_three">FAQ</h2>
            <FAQ titulo={palavras[0][0]} descricao={palavras[0][1]}/>
        </section>
    )
}

export default SectionThree;