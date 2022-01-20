import React,{useState,useContext} from 'react'
const ProductContext = React.createContext()
const SetContext = React.createContext()

export function useProduct(){
    return useContext(ProductContext)
}
export function useSetProduct(){
    return useContext(SetContext)
}
export function ProductContextContainer({children}){
    const [product,setProduct] = useState([])

    return(
        <ProductContext.Provider value={product}>
        <SetContext.Provider value={setProduct}>
        {children}
        </SetContext.Provider>      
        </ProductContext.Provider>
    )
}