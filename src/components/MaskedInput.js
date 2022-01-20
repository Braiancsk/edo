import React from 'react'
import InputMask from 'react-input-mask';
export default function MaskedInput(props) {
    return (
        <div>
            <div className="">
           <InputMask mask={props.mask} onBlur={props.onBlur} onChange={props.onChange} className="border border-gray-300 py-2 pl-10 focus:outline-0 block w-full rounded-md text-sm" placeholder={props.placeholder} type={props.type} name={props.name} id={props.id} required={props.required}/>
       </div>
        </div>
    )
}
