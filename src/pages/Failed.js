import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Failed() {
    const history = useHistory()

    const handleHistory = () =>{
        history.goBack();
    }
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl text-gray-800">Error ao processar o pagamento</h1>
            <p className="font-normal text-md text-gray-800 my-5">Se o erro persistir, entre em contato com a empresa do cartão</p>
            <h6 onClick={handleHistory} className="font-bold text-md text-white bg-gray-800 p-2">Voltar e tentar novamente</h6>
        </div>
    )
}
