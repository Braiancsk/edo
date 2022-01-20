import React from 'react'
import pix from '../assets/pix.png'
import { AiOutlineFieldTime } from 'react-icons/ai';
export default function Pix() {
    return (
        <div className="my-5">
            <div className="flex justify-center items-center py-5">
            <h4 className="font-bold text-md text-gray-500 mr-2">Pague com</h4>
            <img src={pix} alt="bandeira do pix" className="max-w-[80px]" />
            </div>

            <div className="border-4 border-y-gray-600 flex justify-center border-x-0 py-5">
                <div className="flex flex-col items-center justify-center">
                    <AiOutlineFieldTime className="text-gray-500 text-[50px]"/>
                    <h6 className="text-xs text-gray-500 font-bold">Imediato</h6>
                    <p className="text-xs text-gray-600 max-w-[200px] mx-auto text-center">Faça seu pagamento em poucos segundos sem custos adicionais</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <AiOutlineFieldTime className="text-gray-500 text-[50px]"/>
                    <h6 className="text-xs text-gray-500 font-bold">Simples</h6>
                    <p className="text-xs text-gray-600 max-w-[200px] mx-auto text-center">Para pagar basta abrir o aplicativo do seu banco, procurar pelo PIX e escanear o QRcode</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <AiOutlineFieldTime className="text-gray-500 text-[50px]"/>
                    <h6 className="text-xs text-gray-500 font-bold">Seguro</h6>
                    <p className="text-xs text-gray-600 max-w-[200px] mx-auto text-center">O pagamento com PIX foi desenvolvido pelo Banco Central para facilitar suas compras</p>
                </div>
            </div>
            
        </div>
    )
}
