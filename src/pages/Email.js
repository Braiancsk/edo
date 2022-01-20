import ReCAPTCHA from "react-google-recaptcha";
import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import {MdEmail} from 'react-icons/md';
import Input from '../components/Input'
import LoadingButton from '../components/LoadingButton';
import { toast } from 'react-toastify';

export default function Email() {
 //recuperar hash da url
    //const {hash} = useParams()
      //redirecionar usuário
      const {email} = useParams()
      //url
      const url = "https://3d39-2804-7f5-f480-73e0-ccd-94c6-72df-d266.ngrok.io/download"
      const [captcha, setCaptcha] = useState(true)
      const [isPending, setIsPending] = useState(false)
      //setar state de produtos para baixar na página de user

       const fechData = async (e) =>{
         e.preventDefault()
    
          try{
             const response = await axios.get(`${url}?hash=`+email)
             setIsPending(true)
            
             console.log(response)  
             toast.success('Logado com sucesso.')
            
            
          }catch(error){
              console.error(error)
              toast.error(error.message)
          }
     }

    function onChangeCaptcha() {
        setCaptcha(false)
    }

    return (
        <div className="container max-w-[1000px] py-5 h-screen flex items-center justify-center">
            <form onSubmit={fechData} className="max-w-[500px] w-full px-4">
            <h1 className="text-gray-800 text-xl font-bold my-5">Confirme seu Email</h1>
            <label className="text-gray-800 text-sm" htmlFor="email">Email</label>
            <div className="relative">
                <Input value={email} type="text" placeholder="Insira o código" name="email" id="email" required="required" disabled aria-disabled/>
                <div className="absolute top-3 left-4">
                <MdEmail/>
            </div>
            </div>
            
            <div className="my-5">
            <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChangeCaptcha}
            />
            </div>
           
           
            {!isPending && <button type="submit" className="border-0 w-full block bg-green-600 text-white p-2 my-5 hover:bg-green-500 transition" disabled={captcha}>Enviar</button>}
            {isPending && <LoadingButton/>}
            </form>
           
        </div>
        )
}
