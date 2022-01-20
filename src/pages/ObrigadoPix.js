import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CardObrigado from '../components/CardObrigado'
import { BsClipboardCheck} from 'react-icons/bs';
import axios from 'axios'
import { toast } from 'react-toastify';
import {useData} from '../DataContext'
import {useMore} from '../MoreContext'
export default function Pix() {
     //recuperar hash da url
    const {hashKey} = useParams()
    //get the state of MoreContext
    const recomendadosContext = useMore()
    const imagePix = useData()
     //url
     const api = "https://3d39-2804-7f5-f480-73e0-ccd-94c6-72df-d266.ngrok.io/"
     const [data,setData] = useState([])
     const [moreProduct,setMoreProduct] = useState([])
     const [isPending, setIsPending] = useState(true)
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



    const [key, setKey] = useState(hashKey)
    const [copied, setCopied] = useState(false)
    const pixKey = useRef(hashKey)

    const handleCopyToClipBoard = () =>{
        navigator.clipboard.writeText(pixKey.current.value).then(function() {
            toast.success('Chave copiada com sucesso!')
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
    }
    return (
        <div className="container max-w[1000px] w-full flex flex-col items-center">
            <div className="max-w-[200px] w-full border border-gray-300 mt-5">
               <img src={imagePix} alt="QR code" className="max-w-[200px] w-full"/>
            </div>

            <input ref={pixKey} value={key} className="border border-gray-300 p-4 text-center font-bold text-sm mt-5 max-w-[300px] w-full block" id="codigo" disabled/>
   
            <button onClick={handleCopyToClipBoard} className="border-0 p-2 block text-center max-w-[150px] w-full bg-green-600 text-white font-bold text-md rounded-md mt-5">Copiar Chave Pix</button>

            <p className="mt-5 text-gray-800 text-md text-center font-bold bg-green-200 md:p-10 p-5">"Estamos aguardando a transferência do valor. Após a transferência, o pagamento pode levar até 5 minutos para ser compensado."</p>
            
            <div className="text-left w-full max-w-[1000px] px-2">
            <h6 className="mt-10 text-gray-800 text-md font-bold">Recomendamos:</h6>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full max-w-[1000px] my-5 rounded-md">
            {recomendados}
            </div>
            </div>
           
          
        </div>
    )
}
