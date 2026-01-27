import React from 'react'
import './App.css'
import Navbar from "./Page1/Navbar"
import { MdArrowOutward } from "react-icons/md";
import SecondSection from './Page1/SecondSection';
import LastPart from './Page1/LastPart';

const App = () => {
  return (
    <div className='MainSection'>
      <button>Home Page</button>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore recusandae harum animi quas! Commodi, id?</h4>
      <div className="WebPage">
        <Navbar />    
        <div className="Image">
          <div className="middle">
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deserunt saepe provident doloribus molestias? Dolore, vero. Inventore.</p>
            <button>Start Your Own Journey</button>
          </div>
          <div className="bottom">
            <div className="right">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="left">
              <ul>
                <li>Some Thing <MdArrowOutward /></li>
                <li>Some Thing <MdArrowOutward /></li>
                <li>Some Thing <MdArrowOutward /></li>
              </ul>
            </div>
          </div>
        </div>
        <SecondSection />
        <br /><hr /><br />
        <LastPart />
      </div>
    </div>  
  )
}

export default App;
