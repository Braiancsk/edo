import React from 'react'
import { FaCheck} from 'react-icons/fa';
import CardObrigado from '../components/CardObrigado';
import { useState,useEffect } from 'react'
import {useMore} from '../MoreContext'
export default function Obrigado() {
    //get the state of MoreContext
    const recomendadosContext = useMore()
    console.log(recomendadosContext)
    //url
    const url = "https://3d39-2804-7f5-f480-73e0-ccd-94c6-72df-d266.ngrok.io/product"
    const [data,setData] = useState([])
    const [moreProduct,setMoreProduct] = useState([])
    // const [isPending, setIsPending] = useState(true)
    useEffect(() => {
        setMoreProduct(recomendadosContext.more_products)
    },[])

    const recomendados = moreProduct.map(product =>
        <CardObrigado
        key={product.hash}
        link={`/pagamento/`+product.hash}
        image={product.image_url}
        title={product.name}
        description={product.description}
        price={product.price}
        />   
    )

    return (
        <div className="container h-screen pt-10 max-w-[1000px] px-2">
            <div className="border border-gray-400 p-8">
             <h1 className="font-bold text-xl flex items-center text-gray-800"><FaCheck className="text-xl mr-2 text-yellow-400"/>Produto enviado com sucesso!</h1>
             <p className="mt-5 text-gray-800 text-md text-center font-bold bg-green-200 p-5">O seu pagamento foi autorizado pela operadora do cartão de crédito. Em até 60 minutos o produto estará em seu E-mail</p>

             <h6 className="font-bold text-md text-gray-800 mt-10">Recomendamos:</h6>

             <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full max-w-[1000px] my-5 rounded-md">
                 
                 {recomendados}
             </div>
            </div>
            
        </div>
    )
}
