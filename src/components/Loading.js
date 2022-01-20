import React from 'react'
import App from '../App.css'
export default function Loading() {
    return (
       <div className="w-full h-screen fixed top-0 left-0 right-0 flex flex-col items-center justify-center bg-gray-800 z-10">
        <h2 className="text-white font-bold text-xl">Processando pagamento</h2>
         <div className="boxes">
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
       </div>     
    )
}
