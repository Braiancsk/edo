import React from 'react'
import {AiOutlineLoading} from 'react-icons/ai';
import App from '../App.css'
export default function LoadingButton() {
    return (
        <button className="border w-full bg-green-500 p-2 flex items-center flex-row-reverse justify-center my-5">
        <p className="text-white text-md">Enviando</p>
        <AiOutlineLoading className="rotate-center mr-2 text-white text-md"/>
        </button>
        
    )
}
