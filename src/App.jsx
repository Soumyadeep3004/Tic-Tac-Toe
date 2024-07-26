import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import TicTacToe from './components/TicTacToe/TicTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TicTacToe/>
    </div>
  )
}

export default App
