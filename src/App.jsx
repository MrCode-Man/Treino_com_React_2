import './App.css'
import Cabecalho from "./components/header/Cabecalho.jsx";
import SectionOne from "./components/section_one/SectionOne.jsx";
import Formas from "./components/header/Formas.jsx";
import SectionTwo from "./components/section_two/SectionTwo.jsx";

function App() {

  return (
    <div>
        <Formas></Formas>
        <Cabecalho></Cabecalho>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
    </div>
  )
}

export default App
