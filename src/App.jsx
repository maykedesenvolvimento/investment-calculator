import React, { useState, useEffect } from 'react'
import BoxMoney from './components/boxMoney'

const App = () => {
  const [data, setData] = useState({
    initial: 1000,
    rate: 0.5,
    period: 1
  })

  const [installments, setInstallments] = useState([])

  useEffect(() => {
    const array = []
    for (let i = 1; i <= data.period; i++) {
      const total = data.initial * Math.pow((1 + data.rate / 100), i)
      const partial = total - data.initial
      const percent = partial / data.initial * 100
      array.push({ month: i, total, partial, percent })
    }
    setInstallments(array)
  }, [data])

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

      <main>
        {installments.map(i => <BoxMoney month={i.month} total={i.total} partial={i.partial} percent={i.percent} />)}
      </main>
    </div>
  )
}

export default App