import React, { useState } from 'react'

const App = () => {
  const [num , setNum] = useState(0);

  return (
    <div className='bg-zinc-800 w-screen h-screen flex flex-col items-center justify-center text-white gap-5'>
      <h3>{num}</h3>
      <div className='flex gap-2 '>
        <button className='bg-amber-300 p-2 text-black font-semibold rounded active:scale-[0.95]' onClick={function(){
          setNum(prev => prev+1)
          
        }} >Increse</button>
        <button className='bg-amber-400 p-2 text-black font-semibold rounded active:scale-[0.95]' onClick={() => setNum(prev => prev-1)}>Decrese</button>
        <button className='bg-amber-600 p-2 text-black font-semibold rounded active:scale-[0.95]' onClick={() =>setNum(prev => prev+5)}> Jump By 5</button>
      </div>
    </div>
  )
}

export default App
