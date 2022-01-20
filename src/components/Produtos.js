import React from 'react'
export default function Produtos(props) {
  
    return (
        <div className="rounded-md my-5">
            <header className="py-2 bg-sky-200"><h4 className="text-center font-bold">{props.title}</h4></header>
            <section className="bg-yellow-100 py-5">
                <div className="flex items-center justify-center bg-white rounded-t-md max-w-[500px] mx-auto py-5 px-3 border border-gray-300">
                <input onChange={props.onChangeProduct} type="checkbox" className="mr-3 mt-1" id={props.id} name={props.name}/>
                <label htmlFor={props.id} className="cursor-pointer rounded-md font-bold text-neutral-600 text-sm">Sim, desejo aproveitar o desconto e comprar junto - R$ {props.price}</label>
                </div>

                <div className="flex items-center bg-white rounded-b-md max-w-[500px] mx-auto md:p-2 p-4  border border-gray-300">
                {/* <select onChange={props.onChangeMore} className="border border-gray-300 text-sm w-full pl-2 h-10 rounded-md mr-1" id="preco-produto" name={props.namePreco}>

                    <option value="1x" defaultValue>1x R$ {props.preco1}</option>
                    <option value="2x">2x R$ {props.preco2}</option>
                    <option value="3x">3x R$ {props.preco3}</option>
                    <option value="4x">4x R$ {props.preco4}</option>
                    <option value="5x">5x R$ {props.preco5}</option>
                    <option value="6x">6x R$ {props.preco6}</option>
                    <option value="7x">7x R$ {props.preco7}</option>
                </select> */}
                </div>

                <h6 className="text-gray-600 font-bold text-sm max-w-[500px] px-2 mx-auto my-5">{props.description}</h6>
                <p className="mx-auto max-w-[500px] px-2 text-sm">{props.text}</p>
            </section>

        </div>
    )
}
