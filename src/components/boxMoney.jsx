import React from 'react'

export default function BoxMoney({ month, total, partial, percent }) {
    return (
        <div className='box-money'>
            <h5>{month}</h5>
            <div>
                <h3>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</h3>
                <h3>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(partial)}</h3>
                <h4>{percent.toFixed(2)}%</h4>
            </div>
        </div>
    )
}