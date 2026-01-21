import fotoJesus from '../../assets/images/jesus.jpg'

import './Motivo.css'

function Motivo() {

    return (
        <section className='biblical_section'>
            <div className='text_section'>
                <h1 className="biblical_title">João 14:1-10</h1>
                <p className='biblical_text'>
                    Não deixem que seu coração fique aflito. Creiam em Deus; creiam também em mim. <br/>
                    Na casa de meu Pai há muitas moradas. Se não fosse assim, eu lhes teria dito. Vou preparar lugar para vocês <br/>
                    e, quando tudo estiver pronto, virei buscá-los, para que estejam sempre comigo, onde eu estiver. <br/>
                    Vocês conhecem o caminho para onde vou. <br/>
                    Não sabemos para onde o Senhor vai, disse Tomé. Como podemos conhecer o caminho? <br/>
                    Jesus disse: Eu sou o caminho, a verdade e a vida. Ninguém pode vir ao Pai senão por mim. <br/>
                    Se vocês realmente me conhecessem, saberiam quem é meu Pai. Mas, de agora em diante, vão conhecer e ver o Pai <br/>
                    Filipe disse: Senhor, mostre-nos o Pai, e ficaremos satisfeitos <br/>
                    Jesus respondeu: Filipe, estive com vocês todo esse tempo e você ainda não sabe quem eu sou? Quem me vê, vê o Pai! Então por que me pede para mostrar o Pai? <br/>
                    Você não crê que eu estou no Pai e o Pai está em mim? As palavras que eu digo não são minhas, mas de meu Pai, que permanece em mim e realiza suas obras por meu intermédio. <br/>
                </p>
            </div>

            {/*imagem tirada do pinterest, eu pesquisei: the chosen drawing*/}
            <img className='foto_Jesus' src={fotoJesus} alt='foto de Jesus na ceia'></img>

        </section>
    )
}

export default Motivo;
