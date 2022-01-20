import ReCAPTCHA from "react-google-recaptcha";
import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import {RiLockPasswordLine} from 'react-icons/ri';
import Input from '../components/Input'
import LoadingButton from '../components/LoadingButton';
import { toast } from 'react-toastify';
import {useSetProduct} from '../ProductContext'


export default function Login() {
    //recuperar hash da url
    //const {hash} = useParams()
      //redirecionar usuário
      const history = useHistory()
      //url
      const url = "https://3d39-2804-7f5-f480-73e0-ccd-94c6-72df-d266.ngrok.io/download"
      const [login,setLogin] = useState('')
      const [isPending, setIsPending] = useState(false)
      const [captcha, setCaptcha] = useState(true)
      //setar state de produtos para baixar na página de user
      const setProduct = useSetProduct()

      const fechData = async (e) =>{
        e.preventDefault()
        // console.log(login)
         try{
            const response = await axios.get(`${url}?hash=`+login)
            setIsPending(true)
            setProduct(response.data.context)
            console.log(response)  
            toast.success('Logado com sucesso.')
            history.push('/user')
            
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
            <h1 className="text-gray-800 text-xl font-bold my-5">Login</h1>
            <label className="text-gray-800 text-sm" htmlFor="login">Insira seu código aqui</label>
            <div className="relative">
                <Input onChange={(e)=> setLogin(e.target.value)} type="text" placeholder="Insira o código" name="login" id="logiin" required="required"/>
                <div className="absolute top-3 left-4">
                <RiLockPasswordLine/>
            </div>
            </div>
            
            <div className="my-5">
            <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChangeCaptcha}
            />
            </div>
           
           
            {!isPending && <button type="submit" className="border-0 w-full block bg-green-600 text-white p-2 my-5 hover:bg-green-500 transition" disabled={captcha}>Entrar</button>}
            {isPending && <LoadingButton/>}
            </form>
           
        </div>
    )
}
