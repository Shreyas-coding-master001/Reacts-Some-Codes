import React, { useEffect, useState } from 'react'
import "./App.css";
import axios from 'axios';
import Card from './components/Card';

const App = () => {

  const [userPokemon, setuserPokemon] = useState(() => {
    const storage = localStorage.getItem("userPokemons");
    return storage ? JSON.parse(storage) : [];
  });
  const [isClicked, setisClicked] = useState(false);
  const [ballClick, setballClick] = useState({});
  const [BallClicked, setBallClicked] = useState(false)
  const [apiData, setapiData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const responces = await fetch("https://pokeapi.co/api/v2/pokemon");
      if(!responces) console.error("Cannot Fetch");

      const result = await responces.json();
      setapiData(result.results);
      
    }
    fetchData();  
    
  },[]);

  const handleBall = function(){
    const random = Math.floor(Math.random() * 21);
    const pokemon = apiData[random];
    
    console.log(pokemon?.name);
    
    axios.get(pokemon?.url)
    .then(res => {
      
      setballClick(res.data)
      setBallClicked(prev => true)
    })
    .catch(err => console.error(err));
  }

  const setPokemon = function(){
    const updatedPokemons = [...userPokemon, ballClick];

    localStorage.setItem(
      "userPokemons",
      JSON.stringify(updatedPokemons)
    );  

    setuserPokemon(updatedPokemons);
    setBallClicked(prev=> false);
    setisClicked(prev => false);
  }


  return (
    <div className='bg-zinc-900 h-screen w-screen'>
      <div className='border-b-2 border-amber-50 p-3 flex justify-between px-3'> 
        <h1 className='pokemon-name text-amber-300 text-3xl '>Get your Pokemon?</h1>
        <button onClick={() => {setisClicked(prev=>!prev)}}
        className='border-2 border-white p-2 rounded-2xl text-white active:scale-95 hover:bg-zinc-200 hover:text-black'>Get Pokemon</button>
      </div>

      <h2 className='text-amber-400 pokemon-name '>Your Caught Pokemons : </h2>
      <div className='flex gap-3 flex-nowrap h-3/4 mt-5 mx-5'>
      
        {userPokemon?.map(function(pokemon, idx){
            return <div key={idx} >
              <Card pokemon={pokemon}/>
            </div>        
        })}
      </div>

      <div onClick={handleBall}
      className={isClicked ? 
        "design absolute w-60 h-60 top-1/2 left-1/2 translate-[-50%] cursor-pointer": "hidden"}>
        <div className='relative w-full h-full  rounded-full overflow-hidden bg-zinc-200 animate-bounce pointer-events-none'>
          <div className="absolute top-0 w-full bg-red-700 h-1/2 pointer-events-none"></div>

          <div className="absolute top-1/2 left-0 w-full h-4 bg-black -translate-y-1/2 pointer-events-none"></div>

          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-black rounded-full 
                      -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">

            <div className="w-12 h-12 bg-white rounded-full pointer-events-none"></div>
        </div>
        </div>
      </div>

      {BallClicked? 
      <div className='relative z-20 flex justify-center items-center h-2/3'>
      <div className='absolute top-[-120%] flex justify-between items-start w-1/4 h-full'>
        <Card pokemon = {ballClick}/>
        <button onClick={() => setPokemon()}
        className='right-3 font-bold text-2xl text-white bg-red-700 p-4 rounded-2xl active:scale-95'>X</button>
      </div>
      </div>: <></>}
      
    </div>
  )
}

export default App;
