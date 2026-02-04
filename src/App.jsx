import React, { useEffect, useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("");
  const [kisko, setKisko] = useState("");
  const [Url, setUrl] = useState("");
  const [Description, setDescription] = useState("")
  const [users, setUser] = useState([]);

  const handleSubmit = function(e){
    e.preventDefault();

    setUser([...users,{username,kisko,Url,Description}]);
    setKisko("");
    setUrl("");
    setDescription("");
  }

  const handleDelete = (idx) => {
    let Users = [...users];

    Users.splice(idx, 1);
    
    setUser(Users);
  }

  useEffect(function(){
    console.log(users);
  },[users])

  return (
  <div className='bg-zinc-800 w-screen h-screen'>
    <form onSubmit={handleSubmit} className='flex items-center gap-5 py-5 flex-wrap'>
      <input type="text"  value={username} placeholder='Enter your name....' 
      onChange={(e)=>setUsername(e.target.value)} required 
      className='bg-zinc-400 p-3 m-3 mt-5 rounded-2xl' />

      <input type="text"  value={kisko} placeholder="Enter Your Domain" 
      onChange={(e)=>setKisko(e.target.value)} 
      className='bg-zinc-400 p-3 m-3 mt-5 rounded-2xl' />

      <input type= "text" value={Url} placeholder='Enter Valid URL....' required className='bg-zinc-400 p-3 m-3 mt-5 rounded-2xl' onChange={(e) => setUrl(e.target.value)}
      />

      <input type= "text" value={Description} placeholder='Enter Description....' onChange={(e) => setDescription(e.target.value)} required 
      className='bg-zinc-400 p-3 m-3 mt-5 rounded-2xl'/>

      <button type='submit' className='active:scale-[0.95] p-3 border-2 border-solid border-zinc-100 rounded-2xl text-zinc-100 cursor-pointer hover:bg-white hover:text-black hover:font-semibold'>Submit</button>
    </form>
    <br /><hr className='text-white '/><br />

    <div className='w-full flex gap-10 p-5 bg-zinc-800'>
    {users.map(function(user, idx){
      return(<div key={idx} className="bg-zinc-100 pt-5 pb-15 w-70 rounded-2xl p-4 flex flex-col items-center gap-1">
        <img src={user.Url} alt="Profile Photo" 
        className='rounded-full w-30 h-30 object-center object-cover' />

        <h2 className='font-semibold text-2xl'>{user.username}</h2>
        <h3 className ="text-gray-700">{user.kisko}</h3>

        <p className='text-center'>{user.Description}</p>

        <button className='bg-red-600 p-3 rounded-full text-white active:scale-95' onClick={function(){
          handleDelete(idx);
        }}
        >Remove</button>
      </div>)
      
    })}
      
      <div className="bg-zinc-100 pt-5 pb-15 w-70 rounded-2xl p-4 flex flex-col items-center gap-1">
        <img src="https://plus.unsplash.com/premium_photo-1769131129186-1cd08437c42e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Photo" 
        className='rounded-full w-30 h-30 object-center object-cover' />

        <h2 className='font-semibold text-2xl'>Full Name</h2>
        <h3 className ="text-gray-700">ML Engineering</h3>

        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, doloremque?</p>

        <button className='bg-red-600 p-3 rounded-full text-white active:scale-95' onClick={function(){}}
        >Remove</button>
      </div>
      
    </div>
    
  </div>)
}

export default App
