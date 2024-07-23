// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import First from './component/First'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <First/>
//     </>
//   )
// }

// export default App
import React from 'react'
import First from './component/First'
import Second from './component/Second'

const App = () => {
  return (
    <div>
      <First/>
      <br/>
      <br/>
      <Second/>
      
    </div>
  )
}

export default App

