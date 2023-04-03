import React from 'react'
import { Home } from './Components'
import DataProvider from './context/DataProvider'

const App = () => {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App