import './SectionTwo.css'
import MainText from "./MainText.jsx";
import Service from "./service/Service.jsx";
import Schedule from "./schedule/Schedule.jsx";

function SectionTwo() {
    return (
        <div className="SectionTwo">
            <MainText/>
            <Service/>
            <Schedule/>
        </div>
    )
}

export default SectionTwo;