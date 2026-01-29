import React from 'react'
import Card from "./components/Card.jsx";

const App = () => {
  const users = [
  {
    "name": "Alice Johnson",
    "description": "Travel Blogger",
    "likeCounts": 152,
    "saveCounts": 43,
    "isVerified": true,
    "image": "https://plus.unsplash.com/premium_photo-1769008645962-f99a4fa5950d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "imageStatus": "ok"
  },
  {
    "name": "Bob Smith",
    "description": "Food Photographer",
    "likeCounts": 201,
    "saveCounts": 88,
    "isVerified": false,
    "image": "https://plus.unsplash.com/premium_photo-1767646335637-2ce00236de40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "imageStatus": "ok"
  },
  {
    "name": "Carlos Martinez",
    "description": "Graphic Designer",
    "likeCounts": 95,
    "saveCounts": 22,
    "isVerified": false,
    "image": "https://images.unsplash.com/photo-1769107635827-0f5a0d46917e?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "imageStatus": "ok"
  },
  {
    "name": "Divya Patel",
    "description": "Software Developer",
    "likeCounts": 302,
    "saveCounts": 115,
    "isVerified": true,
    "image": "https://images.unsplash.com/photo-1768881311824-8e12792268c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "imageStatus": "ok"
  },
  {
    "name": "Emma Liu",
    "description": "UI/UX Designer",
    "likeCounts": 180,
    "saveCounts": 58,
    "isVerified": false,
    "image": "https://ui-avatars.com/api/?name=Emma+Liu",
    "imageStatus": "ok"
  },
  {
    "name": "Emma Liu",
    "description": "UI/UX Designer",
    "likeCounts": 180,
    "saveCounts": 58,
    "isVerified": false,
    "image": "https://images.unsplash.com/photo-1768560515131-7d3864369f3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "imageStatus": "ok"
  },
  {
    "name": "Lorem Gipsom",
    "description": "Complier Designer",
    "likeCounts": 180,
    "saveCounts": 58,
    "isVerified": false,
    "image": "https://images.unsplash.com/photo-1768777156507-8304c612d621?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "imageStatus": "ok"
  },
  ]


  return (
    <div className='bg-zinc-800 w-screen flex justify-evenly flex-wrap'>
      {users.map(function(elem, idx){
        return(
        <div key={idx} className='bg-white p-1 my-5 rounded-2xl'>
            <Card user={elem}/>
        </div>
        )
      })}
    </div>
  )
}

export default App;