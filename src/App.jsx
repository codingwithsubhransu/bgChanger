import { useState } from "react"


function App() {
  const [color, setColor] = useState('#1D1E2C')

  return (
    <div className="w-full h-screen"  style={{backgroundColor: color}}>
      <div className="bg-white fixed flex gap-6 flex-wrap justify-center bottom-12 px-2 rounded-xl left-1/2 right-1/2">
        <button className="bg-red-600 px-3.5 py-1.5 rounded-lg text-white m-4 text-xl" onClick={() => setColor('Red')}>
          Red
        </button>

        <button className="bg-green-600 px-3.5 py-1.5 rounded-lg text-white m-4 text-xl" onClick={() => setColor('Green')}>
          Green
        </button>

        <button className="bg-blue-600 px-3.5 py-1.5 rounded-lg text-white m-4 text-xl" onClick={() => setColor('Blue')}>
          Blue
        </button>

        <button className="bg-violet-600 px-3.5 py-1.5 rounded-lg text-white m-4 text-xl" onClick={() => setColor('Violet')}>
          Violet
        </button>

        <button className="bg-amber-600 px-3.5 py-1.5 rounded-lg text-white m-4 text-xl" onClick={() => setColor('#E17100')}>
          Amber
        </button>

        <button className="bg-yellow-600 px-3.5 py-1.5 rounded-lg text-white m-4 text-xl" onClick={() => setColor('Yellow')}>
          Yellow
        </button>

        <button className="bg-pink-600 px-3.5 py-1.5 rounded-lg text-white m-4 text-xl" onClick={() => setColor('Pink')}>
          Pink
        </button>
        
      </div>
    </div>
  )
}

export default App
