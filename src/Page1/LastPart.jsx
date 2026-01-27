import "./LartPart.css"
import { MdArrowOutward } from "react-icons/md";

function LastPart() {
    return <div className="LastSection">
        <div className="FirstSec">
            <button> Services</button>

            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, rem sint enim exercitationem maxime voluptate hic velit eos quaerat cupiditate.
            </h4>

            <button>Explore More <MdArrowOutward /></button>
        </div>
        <div className="card">
            <button>Training Programs</button>
            <div className="One">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <button> <MdArrowOutward /> </button>
            </div>
        </div>
        <div className="Image-Last">
            <div className="card">
                <button>Court Access</button>
                <p>Hourly Court Rental</p>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, et?</p>
        </div>
    </div>
}

export default LastPart;