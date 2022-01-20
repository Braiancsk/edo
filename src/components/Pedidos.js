import React from 'react'

export default function Pedidos(props) {
    return (
        <div className="my-5">
            <h2 className="text-gray-600 font-bold">Detalhamento da compra</h2>
            <h4 className="p-3 bg-gray-200 text-gray-600 font-bold text-sm my-2">{props.titulo}</h4>
            <div className="flex justify-between py-2 px-3">
            <p className="text-xs text-gray-400">Preço</p>
            <p className="text-xs text-gray-400">R$ {props.preco}</p>
            </div>

            <p className="px-3 py-2 text-xs border border-y-gray-200 border-x-0 border-dashed text-gray-500">ou em 10 x de {props.dividido} * no cartão</p>
            
        </div>
    )
}
