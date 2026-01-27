import "./Navbar.css";
import { MdArrowOutward } from "react-icons/md";

function Navbar(){
    return(
        <div className="Navbar">
            <h2>Horizon Courts</h2>
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Coaches</li>
                <li>Events</li>
                <li>Contact</li>
            </ul>
            <button>Book Now <MdArrowOutward /></button>
        </div>
    )
}

export default Navbar;