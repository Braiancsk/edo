import React from 'react'
import {AiOutlineFilePdf} from 'react-icons/ai';
// import {useParams} from 'react-router-dom'
import CardObrigado from '../components/CardObrigado';
// import axios from 'axios'
import { useState,useEffect } from 'react'
import {useProduct} from '../ProductContext'
export default function User() {
 //recuperar hash da url

  //url
  const url = "https://3cb6-2804-7f5-f380-9f4e-3c8b-c544-12e1-ba6c.ngrok.io/download"
 //recuperar state do usuário
 const products = useProduct()
 const [download,setDownload] = useState([])
 useEffect(()=>{
   
    setDownload(products.products)
    setMoreProduct(products.more_products)
 },[])

 const [data,setData] = useState([])
 const [moreProduct,setMoreProduct] = useState([])
 const [isPending, setIsPending] = useState(true)
 useEffect(() => {
    //  const fechData = async () =>{
    //      try{
    //          const response = await axios.get(`${url}?k=`+hash)
    //          setData(response.data.context)  
    //          setMoreProduct(response.data.context.more_products)
    //          console.log(response.data.context)
    //          setIsPending(false)
    //      }catch(error){
    //          console.error(error)
    //      }
    //  }
    
    //  fechData();
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

  const produtos = download.map(product =>
     <div className="bg-sky-200 p-5 my-5 rounded-md" key={product.name}>
                 <h2 className="text-gray-800 font-bold">{product.name}</h2>
                 <h2 className="text-gray-800 font-bold text-sm">{product.decription}</h2>
                 <a target="_blank" rel="noreferrer" href={product.pdf_url} className="no-underline border-0 md:max-w-[200px] w-full flex justify-center items-center bg-green-600 text-white p-2 my-5 hover:bg-green-500 transition"><AiOutlineFilePdf className="mr-2"/>Baixar PDF</a>
     </div>
 )


    return (
        <div className="container max-w-[1000px] w-full py-10">
            <h1 className="text-xl text-gray-800 font-bold">Seus produtos</h1>
           {produtos}

            
            <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full max-w-[1000px] bg-sky-200 my-5 rounded-md p-3">
                 
                 {recomendados}
             </div>
        </div>
    )
}
