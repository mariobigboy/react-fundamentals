import React from 'react'
import TarjetaFruta from './components/TarjetaFruta/'

const App = () => (
  <div>
    <h1>Frutas</h1>
    <TarjetaFruta name={'Sandia'} price={5.00} />
    <TarjetaFruta name={'Naranja'} price={1.50} />
    <TarjetaFruta name='Kiwi' price={3.30} />
  </div>
)
export default App
