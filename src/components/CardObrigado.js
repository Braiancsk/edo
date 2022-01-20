import React from 'react'
import {Link} from 'react-router-dom'
export default function CardObrigado(props) {
    return (
        <Link to={props.link} className="rounded-md max-w-[300px] w-full border border-gray-300 mt-3 bg-sky-200">
            <img src={props.image} alt="produto recomendado" className="rounded-t-md max-w-[300px] w-full object-cover" />
            <div className="p-5">
            <h6 className="font-bold text-xl text-gray-800">{props.title}</h6>
            <p className="font-normal text-md text-gray-800 py-3">{props.description}</p>
            <h6 className="font-bold text-md text-gray-800">R$ {props.price}</h6>
            </div>
            
        </Link>
    )
}
