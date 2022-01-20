import React,{useState,useContext} from 'react'
const MoreContext = React.createContext()
const SetMoreContext = React.createContext()

export function useMore(){
    return useContext(MoreContext)
}
export function useSetMore(){
    return useContext(SetMoreContext)
}
export function MoreProducts({children}){
    const [recomendados,setRecomendados] = useState([])

    return(
        <MoreContext.Provider value={recomendados}>
        <SetMoreContext.Provider value={setRecomendados}>
        {children}
        </SetMoreContext.Provider>      
        </MoreContext.Provider>
    )
}