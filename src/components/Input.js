import React from 'react'

export default function Input(props) {
    return (
        <div className="">
           
            <input value={props.value} onBlur={props.onBlur} onChange={props.onChange} className="border border-gray-300 py-2 pl-10 focus:outline-0 block w-full rounded-md text-sm" placeholder={props.placeholder} type={props.type} name={props.name} id={props.id} required={props.required}/>
        </div>
    )
}
