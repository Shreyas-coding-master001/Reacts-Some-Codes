import "./SecondSection.css";
import { LiaFolderPlusSolid } from "react-icons/lia";
import Switch from "../UIComponents/Slider.jsx";

function SecondSection() {
    return (<div className="SecondSection">
        <section className="first">
            <button>About Horizon</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates, quidem optio perspiciatis similique a.</p>
        </section>
        <section className="midCard">
            <div className="card">
                <LiaFolderPlusSolid />
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quasi delectus expedita nisi doloremque eius suscipit explicabo.</h3>
                <div className="One">
                    <Switch className="Switch"/><h4> :  Game Mode</h4>
                </div>
            </div>
            <div className="card">
                <button>Private & groug Lessons</button>
            </div>
            <div className="card">
                <div className="top">
                    <h2>100+</h2>
                    <h3>Pro Coaches</h3>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                </div>
                <div className="bottom">
                    <ul>
                        <div className="One">
                            <li>Beginner</li>
                            <p>55</p>
                        </div>
                        <div className="One">
                            <li>Intermidiate</li>
                            <p>40</p>
                        </div>
                        <div className="One">
                            <li>Advanced</li>
                            <p>35</p>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
        <div className="Extras">
            <h5>A few more facts Ahout us in numbers</h5>
            <div className="Info">
                <div className="One">
                    <h2>12 000+</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="One">
                    <h2>89%</h2>
                    <p>Lorem ipsum dolor.</p>
                </div>
                <div className="One">
                    <h2>1,200+</h2>
                    <p>Lorem ipsum</p>
                </div>
                <div className="One">
                    <h2>125+</h2>
                    <p>Lorem ipsum dolor.</p>
                </div>
            </div>
        </div>
      </div>)
}

export default SecondSection;