
//Tailwind css is required to install
import { useState } from 'react'


function App() {
  const [color, setColor] = useState("grey")
 
  return (
    
      <div className='w-full h-screen duration-200' style={{ backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='bg-white flex flex-wrap justify-center gap-3 shadow-lg rounded-lg px-5 py-3'>
                <button type='button' className='px-8 mx-5 py-2 bg-red-600 hover:bg-red-900 text-white rounded-md' onClick={()=>setColor("Red")}>Red</button>
                <button type='button' className='px-8 mx-5 py-2 bg-orange-600 hover:bg-orange-900 text-white rounded-md' onClick={()=>setColor("Orange")}>Orange</button>
                <button type='button' className='px-8 mx-5 py-2 bg-blue-600 hover:bg-blue-900 text-white rounded-md' onClick={()=>setColor("Blue")}>Blue</button>
                <button type='button' className='px-8 mx-5 py-2 bg-green-600 hover:bg-green-900 text-white rounded-md' onClick={()=>setColor("Green")}>Green</button>
                <button type='button' className='px-8 mx-5 py-2 bg-yellow-600 hover:bg-yellow-900 text-white rounded-md' onClick={()=>setColor("Yellow")}>Yellow</button>
                <button type='button' className='px-8 mx-5 py-2 bg-gray-600 hover:bg-gray-900 text-white rounded-md' onClick={()=>setColor("Gray")}>Gray</button>
                <button type='button' className='px-8 mx-5 py-2 bg-purple-600 hover:bg-purple-900 text-white rounded-md' onClick={()=>setColor("Purple")}>Purple</button>
                </div>
        </div>

      </div>
        
   
  )
}

export default App
