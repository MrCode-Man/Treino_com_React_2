import './SectionThree.css'
import FAQ from './FAQ/FAQ.jsx'
import {palavras}  from './FAQ/MatrizPalavras.js'

function SectionThree() {
    return (
        <section className='SectionThree'>
            <h2 className="titulo_section_three">FAQ</h2>

            <div className="agrupamento_section_three">
                {palavras.map((item, index) => (
                    <FAQ key={index} titulo={item[0]} descricao={item[1]} />
                ))}
            </div>
        </section>
    )
}

export default SectionThree;