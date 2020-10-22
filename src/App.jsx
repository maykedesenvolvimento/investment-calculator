import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState({
    initial: 0,
    rate: 0,
    period: 0
  })

  const change = (field) => (event) => setData({ ...data, [field]: event.target.value })

  return (
    <div className='app'>
      <header className='center'>
        <h1>React - Juros compostos</h1>
      </header>
      <div className='form'>
        <div className='form-item'>
          <label htmlFor='initial'>Montante inicial: </label>
          <input type='number' id='initial' value={data.initial} onChange={change('initial')} />
        </div>
        <div className='form-item'>
          <label htmlFor='rate'>Taxa de juros (mensal): </label>
          <input type='number' id='rate' value={data.rate} onChange={change('rate')} />
        </div>
        <div className='form-item'>
          <label htmlFor='period'>Período (em meses): </label>
          <input type='number' id='period' value={data.period} onChange={change('period')} />
        </div>
      </div>
    </div>
  )
}

export default App