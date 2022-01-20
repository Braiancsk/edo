import React from 'react'
import { BsFillPersonFill,BsFillCreditCardFill } from 'react-icons/bs';
import { GrSecure } from 'react-icons/gr';
import MaskedInput from './MaskedInput';
import InputMask from 'react-input-mask';
// import {useState} from 'react'

export default function Card(props) {



    return (
        <div className="mb-5">
            <div className="">
                    <label className="text-gray-500 text-sm" htmlFor="numero-cartao">Cartão</label>
                    <div className="relative">
                    <MaskedInput mask="9999 9999 9999 9999" onFocus={props.onFocus} onChange={props.onChangeNumber} className="border border-gray-300 py-2 pl-10 focus:outline-0 block w-full rounded-md text-sm" type="text" placeholder={props.placeholderCartao} name={props.nameCartao} id="numero-cartao"/>
                    <div className="absolute top-3 left-4">
                    <BsFillCreditCardFill/> 
                    </div>
                    </div>
            </div>

            <div className="mt-3">
                    <label className="text-gray-500 text-sm" htmlFor="titular">Titular</label>
                    <div className="relative">
                    <input onFocus={props.onFocus}  onChange={props.onChangeName} className="border border-gray-300 py-2 pl-10 focus:outline-0 block w-full rounded-md text-sm" type="text" placeholder={props.placeholderTitular} name={props.nameTitular} id="titular"/>
                    <div className="absolute top-3 left-4">
                    <BsFillPersonFill/>
                    </div>
                    </div>
            </div>

            <div className="flex flex-wrap md:justify-between justify-center mt-5">
            <div className="flex mt-3 mb-6 md:mb-0">
        
        {/* <select className="border border-gray-300 text-sm max-w-[60px] w-full text-center h-10 rounded-md mr-1" id="mes" name="mes">
        <option value="MM" select>MM</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        </select> */}

        {/* <select className="border border-gray-300 text-sm max-w-[60px] w-full text-center h-10 rounded-md mr-1" id="ano" name="ano">
        <option value="AA" select>AA</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        </select> */}

        <div>
        <div className="flex">
        <div className="">
                <div className="relative">
                <InputMask mask="99/9999" onFocus={props.onFocus} onChange={props.onChangeValidade} className="border border-gray-300 py-2 pl-10 focus:outline-0 block w-full max-w-[100px] rounded-md text-sm" placeholder="Validade" type="text" name={props.nameValidade} id="validade" />
                <div className="absolute top-3 left-4">
                <GrSecure/>
                </div>
                </div>
        </div>

      
        <div className="ml-1">
                <div className="relative">
                <input onFocus={props.onFocus} onChange={props.onChangeCvc} className="border border-gray-300 py-2 pl-10 focus:outline-0 block w-full rounded-md text-sm" type="text" placeholder="Código de segurança do cartão" name={props.nameCvc} id="cvc"/>
                <div className="absolute top-3 left-4">
                <GrSecure/>
                </div>
                </div>
        </div>
        </div>
       

{/* 
        <select onChange={props.onChangeSelect} className="border border-gray-300 text-sm  w-full h-10 rounded-md mr-1 mt-3 pl-2" id="ano" name="ano">
        <option value="1x" defaultValue>1x R$ {props.price}</option>
        <option value="2x">2x R$ {props.price2}*</option>
        <option value="3x">3x R$ {props.price3}*</option>
        <option value="4x">4x R$ {props.price4}*</option>
        <option value="5x">5x R$ {props.price5}*</option>
        <option value="6x">6x R$ {props.price6}*</option>
        <option value="7x">7x R$ {props.price7}*</option>
        <option value="8x">8x R$ {props.price8}*</option>
        <option value="9x">9x R$ {props.price9}*</option>
        <option value="10x">10x R$ {props.price10}*</option>  
        </select> */}
        </div>
      

      

        </div>

       
        </div>

        
        </div>
    )
}
