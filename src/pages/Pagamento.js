import React, { useState,useEffect,useRef } from 'react'
import axios from 'axios'
import { useParams,useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Input from '../components/Input'
import { BsFillPersonFill,BsFillCreditCardFill,BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import { RiPixelfedFill} from 'react-icons/ri';
import { ImLocation} from 'react-icons/im';
import Card from '../components/Card'
import Produtos from '../components/Produtos'
// import Pedidos from '../components/Pedidos';
import Pix from '../components/Pix';
import Skeleton from '../components/Skeleton';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import MaskedInput from '../components/MaskedInput';
import SmallSkeleton from '../components/SmallSkeleton';
import Loading from '../components/Loading';
//custom hooks
import {useSetData} from '../DataContext'
import {useSetMore} from '../MoreContext'
import {useSetProduct} from '../ProductContext'
// alerts from toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Pagamento() {
    //recuperar hash da url
    const {hash} = useParams()
    const history = useHistory()
    //url
    const url = "https://3d39-2804-7f5-f480-73e0-ccd-94c6-72df-d266.ngrok.io/"
    const [data,setData] = useState([])
    const [moreProduct,setMoreProduct] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [isProcessing, setIsProcessing] = useState(false)
    useEffect(() => {
        const fechData = async () =>{
            try{
                const response = await axios.get(`${url}product?k=`+hash)
                setData(response.data.context)  
                setMoreProduct(response.data.context.more_products)
                // console.log(moreProduct)
                setIsPending(false)
                
            }catch(error){
                console.error(error)
            }
        }
       
        fechData();
        
    },[])

    //set the state of context
    const setDataPix = useSetData()
    const setRecomendados = useSetMore()
    //recuperar visitorID
    const [visitor,setVisitor] = useState('')
    var visitorID = window.visitorID;
    useEffect(() => {
        setVisitor(visitorID);  
        // console.log(visitor)
    },[])
    
  
    // setVisitor(window.visitorID)
    // console.log(visitor)
    //recuperar dados dos inputs
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [repeatEmail,setRepeatEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [nome,setNome] = useState('')
    const [cpf,setCpf] = useState('')
    const [cep,setCep] = useState('')
    const [rua,setRua] = useState('')
    const [numero,setNumero] = useState('')
    const [number,setNumber] = useState('')
    const [validade,setValidade] = useState('')
    const [complemento,setComplemento] = useState('')
    const [distrito,setDistrito] = useState('')
    const [estado,setEstado] = useState('')
    const [cidade,setCidade] = useState('')
    const [pais,setPais] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus,setFocus] = useState('')
    const [preco,setPreco] = useState('')
    const [maisProdutos,setMaisProdutos] = useState([])
    const [alertMessage,setAlertMessage] = useState(false)
    const [metodoCartao,setMetodoCartao] = useState(true)
    const [metodoPix,setMetodoPix] = useState(false)
    const [pagamento, setPagamento] = useState('')
    //verificar se os emails batem
    function handleEmailVerification(){
        if(email === repeatEmail){
            setAlertMessage(false)
        }else{
            setAlertMessage(true)
        }
    }

    //virar o cartão com o focus
    
    function handleFocus(e){
        setFocus(e.target.name)
    }


    //mudar metodo de pagamento
    const inputCard = useRef()
    function changePaymentMethodToCard(){      
            setMetodoCartao(true)
            setMetodoPix(false)
            setPagamento('Cartão')  
    }
    const inputPix = useRef()
    function changePaymentMethodToPix(){
        setMetodoCartao(false)
        setMetodoPix(true)
        setPagamento('Pix')
    }


    //fazer aqui a requisição de post pra API
    async function HandleSubmit(e) {
        e.preventDefault()

        //se o metodo selecionado for Cartão de crédito
        if(metodoCartao){
            const postCard = {
                k: hash,
                name: user,
                email: email,
                cpf: cpf.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, ''),
                phone: phone.replace(/[&\s/\\#,+()$~%.'":*?<>{}-]/g, ''),
                postal_code: cep.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, ''),
                street:rua,
                district:estado, 
                number: numero,
                complement:complemento,
                state:distrito,
                city:cidade,
                country:pais,
                visitorID: visitor,
                holder:nome,
                card_number:number,
                expiration_date:validade,
                security_code:cvc,
                more:product
            }
            try{
                //estado para rendereizar o processando pagamento
                setIsProcessing(true)
                const response = await axios.post(`${url}payCreditCard`,postCard,{
                    headers: {
                        "Content-type": "application/json",
                      },
                      body: JSON.stringify(postCard)    
                })
                console.log(response)
                //set the state to the obrigado page       
                setRecomendados(response.data.context)
                //add a redirect do the campgrounds page
                history.push(`/obrigado`)
            } catch(err){
                toast.error(err.message)
                setIsProcessing(false)
            }
   
            
        }

        //se o metodo selecionado for PIX
        if(metodoPix){
             const postPix = {
             'k': hash,
             'name': user,
             'email': email,
             'cpf': cpf.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, ''),
             'phone': phone.replace(/[&\s/\\#,+()$~%.'":*?<>{}-]/g, ''),
             'postal_code': cep.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, ''),
             'street':rua,
             'number': numero,
             'complement':complemento,
             'district': estado,
             'state':distrito,
             'city':cidade,
             'country':pais,
             'more':product
         }

         try{    
            //add a state for the user to see that is posting the campground
            setIsProcessing(true)
             const response = await axios.post('https://3d39-2804-7f5-f480-73e0-ccd-94c6-72df-d266.ngrok.io/payPix',postPix,{
                 headers: {
                    "Content-type": "application/json",
                   },
                   body: JSON.stringify(postPix)    
             })
          
             console.log(response)
             //set the state to the obrigado page       
             setRecomendados(response.data.context)
             setDataPix(response.data.context.qr_code)
             //add a redirect to the obrigadoPix page
            history.push(`/pix/${hash}/${response.data.context.key}`)
            
             
                      
         } catch(err){
            console.error(err.message)
            toast.error(err.message)
            setIsProcessing(false)
         }

        
        }
        // setIsPending(true)
        // const postData = {
        //     titulo: title,
        //     preco: price,
        //     imagem: image,
        //     conteudo: description,
        //     autor: autor
        // }
        // try{
        //     const response = await axios.post('/campgrounds',postData,{
        //         headers: {
        //             "Content-type": "application/json",
        //           },
        //           body: JSON.stringify(postData)    
        //     })
            
        //     //add a state for the user to see that is posting the campground
        //     setIsPending(false)
            
        //     //add a redirect do the campgrounds page
        //     history.push('/campgrounds/'+userID)
        // } catch(err){
        //     console.log('erro ao executar o post')
        // }
       
    }

        const produtos = moreProduct.map((value,index) => 
            <Produtos
            key={value.name}
            // onChangeMore={(e)=> setMorePrice(e.target.value)}
            title={value.name}
            price={value.price}
            onChangeProduct={handlePedidos}
            preco1={value.price}
            preco2={Math.floor(value.price/2)}
            preco3={Math.floor(value.price/3)}
            preco4={Math.floor(value.price/4)}
            preco5={Math.floor(value.price/5)}
            preco6={Math.floor(value.price/6)}
            preco7={Math.floor(value.price/7)}
            id={index+1}
            name={value.name}
            namePreco={value.price}
            description={value.description}
            text=""
            />
        )


    //listar os pedidos marcados
      
    let [product,setProduct] = useState([])
    function handlePedidos(e){  
        

            if(product.includes(e.target.id)){
               let item = product.indexOf(e.target.id)
               product.splice(item,1) 
            }else{
                product.push(e.target.id)     
           
            }
            // console.log(product)
            
    }

    // const listOfProducts = product.map(product =>
    //         <Pedidos
    //         key={product.name}
    //         titulo={product.name}
    //         preco={product.price}
    //         dividido={Math.round(product.price)/ 10}
    //         // id="produtos"
    //         // name="produtos"
    //         />
    // )

    //auto completar os campos
    const [cepParams,setCepParams] = useState('')
    const [dados,setDados] = useState([])
    async function handleAutoComplete(e){
        
        try{
            if(e.target.value.length >= 8){
            setCepParams(e.target.value)
            const response = await axios.get(`https://viacep.com.br/ws/${cepParams}/json/`)
            setDados(response.data)
            console.log(dados)
            }
        }catch(err){
            console.error(err)
        }
        
    }        
 
    
    return (
        <div className="container py-5">
            {isProcessing && <Loading/>}
            <div className="w-full max-w-screen-lg m-auto">
                {!isPending && <img className="max-w-full md:h-96 h-auto w-full object-cover rounded-md" src={data.image_product} alt="banner do produto" />}
                {isPending && <Skeleton/>}

                <form className="p-5 bg-white rounded-md mt-5 max-w-screen-md mx-auto" onSubmit={HandleSubmit}>

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="nome">Nome</label>
                    <div className="relative">
                    <Input onChange={(e)=> setUser(e.target.value)} type="text" placeholder="Seu nome completo" name="name" id="nome" required="required"/>
           
                    <div className="absolute top-3 left-4">
                    <BsFillPersonFill/>
                    </div>
                    </div>
                    </div>
                   

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="email">E-mail</label>
                    <div className="relative">
                    <Input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Digite seu melhor E-mail" name="email" id="email" required="required"/>
                    {alertMessage && <h6 className="text-xs text-red-600">Os E-mail não são iguais.</h6>}
                    
                    <div className="absolute top-3 left-4">
                    <AiOutlineMail/>
                    </div>
                    </div>
                    </div>
                  

                    <div className="mt-3">  
                    <label className="text-gray-500 text-sm" htmlFor="email-repeat">Digite novamente seu E-mail</label>
                    <div className="relative">
                    <Input onBlur={handleEmailVerification} onChange={(e)=> setRepeatEmail(e.target.value)} type="email" placeholder="Digite novamente seu E-mail" name="email-repeat" id="email-repeat" required="required"/>
                    {alertMessage && <h6 className="text-xs text-red-600">Os E-mail não são iguais.</h6>}
                    <div className="absolute top-3 left-4">
                    <AiOutlineMail/>
                    </div>
                    </div>
                    </div>

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="telefone">Celular</label>
                    <div className="relative">
                    <MaskedInput
                    mask="(99) 99999 9999"
                    onChange={(e)=> setPhone(e.target.value)} 
                    type="tel" 
                    placeholder="Celular" 
                    name="phone" 
                    id="telefone" 
                    required="required"/>
                    <div className="absolute top-3 left-4">
                    <AiOutlinePhone/>
                    </div>
                    </div>
                    </div>

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="cpf">CPF</label>
                    <div className="relative">
                    <MaskedInput
                    mask="999.999.999-99"
                    onChange={(e)=> setCpf(e.target.value)} 
                    type="text" 
                    placeholder="Insira seu CPF" 
                    name="cpf" 
                    id="cpf" 
                    required="required"/>
                    <div className="absolute top-3 left-4">
                    <BsPerson/>
                    </div>
                    </div>
                    </div>

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="cep">CEP</label>
                    <div className="relative">
                    <MaskedInput
                    mask="99999-999"
                    onChange={(e)=> setCep(e.target.value)} 
                    onBlur={handleAutoComplete}
                    type="text" 
                    placeholder="Insira seu CEP" 
                    name="postal_code" 
                    id="cep" 
                    required="required"/>
                    <div className="absolute top-3 left-4">
                    <ImLocation/>
                    </div>
                    </div>
                    </div>

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="rua">Rua</label>
                    <div className="relative">
                    <Input
                    onChange={(e)=> setRua(e.target.value)} 
                    type="text" 
                    placeholder="Rua" 
                    name="street" 
                    id="rua" 
                    value={dados.logradouro}
                    required="required"/>
                    <div className="absolute top-3 left-4">
                    <ImLocation/>
                    </div>
                    </div>
                    </div>

                    <div className="flex gap-2">

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="numero">Número</label>
                    <div className="relative">
                    <Input
                    onChange={(e)=> setNumero(e.target.value)} 
                    type="text" 
                    placeholder="Número" 
                    name="number" 
                    id="numero" 
                   />
                    <div className="absolute top-3 left-4">
                    <ImLocation/>
                    </div>
                    </div>
                    </div>

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="complemento">Complemento</label>
                    <div className="relative">
                    <Input
                    onChange={(e)=> setComplemento(e.target.value)} 
                    type="text" 
                    value={dados.complemento}
                    placeholder="Complemento" 
                    name="complement" 
                    id="complemento" 
                    />
                    <div className="absolute top-3 left-4">
                    <ImLocation/>
                    </div>
                    </div>
                    </div>

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="distrito">Distrito</label>
                    <div className="relative">
                    <Input
                    onChange={(e)=> setDistrito(e.target.value)} 
                    type="text" 
                    placeholder="Distrito" 
                    name="district" 
                    id="distrito" 
                    value={dados.uf}
                    required="required"/>
                    <div className="absolute top-3 left-4">
                    <ImLocation/>
                    </div>
                    </div>
                    </div>
                    </div>


                    <div className="flex gap-2">
                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="estado">Estado</label>
                    <div className="relative">
                    <Input
                    onChange={(e)=> setEstado(e.target.value)} 
                    type="text" 
                    placeholder="Estado" 
                    name="state" 
                    id="estado" 
                    required="required"/>
                    <div className="absolute top-3 left-4">
                    <ImLocation/>
                    </div>
                    </div>
                    </div>

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="cidade">Cidade</label>
                    <div className="relative">
                    <Input
                    onChange={(e)=> setCidade(e.target.value)} 
                    type="text" 
                    placeholder="Cidade" 
                    name="city" 
                    id="cidade" 
                    value={dados.localidade}
                    required="required"/>
                    <div className="absolute top-3 left-4">
                    <ImLocation/>
                    </div>
                    </div>
                    </div>

                    <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="pais">País</label>
                    <div className="relative">
                    <Input
                    onChange={(e)=> setPais(e.target.value)} 
                    type="text" 
                    placeholder="País" 
                    name="country" 
                    id="pais" 
                    required="required"/>
                    <div className="absolute top-3 left-4">
                    <ImLocation/>
                    </div>
                    </div>
                    </div>
                    </div>


                    <div className="flex justify-around mt-5">
                  
                        <input ref={inputCard} onChange={changePaymentMethodToCard} type="radio" className="hidden" id="cartao" name="metodo" defaultChecked/>
                        <label htmlFor="cartao" className="text-gray-500 md:max-w-xs max-w-[180px] w-full text-md flex justify-center items-center h-14 border border-gray-300 cursor-pointer"><BsFillCreditCardFill className="mr-2 md:text-[30px] text-[20px]"/> Cartão de crédito</label>
                

                   
                        <input ref={inputPix} onChange={changePaymentMethodToPix} type="radio" className="hidden" id="pix" name="metodo"/> 
                        <label htmlFor="pix" className="text-gray-500 md:max-w-xs max-w-[180px] w-full text-md flex justify-center items-center h-14 border border-gray-300 cursor-pointer"><RiPixelfedFill className="mr-2 md:text-[30px] text-[20px]"/> Pix</label>
                  
                    </div>
                    
                    {metodoCartao && 
                    <div className="flex justify-center flex-wrap border border-gray-300 p-4 mt-3 rounded-md">
                    <Card
                    onChangeNumber={(e)=> setNumber(e.target.value)}
                    onFocus={handleFocus}
                    placeholderCartao="Número do cartão"
                    nameCartao= "numero_cartao"
                    onChangeName={(e)=> setNome(e.target.value)}
                    placeholderTitular = "Nome do titular"
                    nameTitular = "titular"
                    onChangeValidade={(e)=> setValidade(e.target.value)}
                    nameValidade = "validade"
                    onChangeCvc={(e)=> setCvc(e.target.value)}
                    nameCvc="cvc"
                    // onChangeSelect={(e)=> setPreco(e.target.value)}
                    price={data.price}
                    price2={Math.floor(data.price/2)}
                    price3={Math.floor(data.price/3)}
                    price4={Math.floor(data.price/ 4)}
                    price5={Math.floor(data.price/ 5)}
                    price6={Math.floor(data.price/ 6)}
                    price7={Math.floor(data.price/ 7)}
                    price8={Math.floor(data.price/ 8)}
                    price9={Math.floor(data.price/ 9)}
                    price10={Math.floor(data.price/ 10)}
                    />
                    <Cards
                    cvc={cvc}
                    expiry={validade}
                    focused={focus}
                    name={nome}
                    number={number}
                    />
                    </div>
                    }
                    {metodoPix && <Pix/>}
                                         
                    {!isPending && produtos}
                    {isPending && <Skeleton/>} 
                   
                    <div className="flex mt-5">
                        {!isPending && <img src={data.image_product} alt="produto" className="max-w-[64px] w-full h-16" />}
                        {isPending && <SmallSkeleton/>}
                        <div className="ml-2">
                        <h6 className="font-bold text-sm">{!isPending && data.name} {isPending && <SmallSkeleton/>}</h6>
                        <h4 className="text-xl text-gray-600 font-bold"> {!isPending && <div>R$ {data.price}</div>} {isPending && <SmallSkeleton/>}</h4>
                        {/* <p className="text-xs text-gray-500">ou em 10 x de R$ {!isPending && Math.round(data.price)/ 10}* no cartão</p> */}
                        {isPending && <SmallSkeleton/>} 
                        </div>
                        
                    </div>

                    <div className="my-5">
                        
                        {/* {listOfProducts} */}
                                           
                    </div>

                    {!alertMessage && <button type="submit" className="w-full block text-center bg-green-400 p-2 text-white font-bold rounded-md my-5 hover:bg-green-500 transition">Comprar agora</button>}
                    {alertMessage && <button type="submit" className="w-full block text-center bg-green-400 p-2 text-white font-bold rounded-md my-5 hover:bg-green-300 transition" disabled>Comprar agora</button>}
                   
                </form>
            </div>
        </div>
    )
}
