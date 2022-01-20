import React,{useState,useContext} from 'react'
const DataPix = React.createContext()
const SetPix = React.createContext()
export function useData(){
    return useContext(DataPix)
}
export function useSetData(){
    return useContext(SetPix)
}
export function DataContext({children}){
    const [dataPix,setDataPix] = useState([])

    return(
        <DataPix.Provider value={dataPix}>
        <SetPix.Provider value={setDataPix}>
        {children}
        </SetPix.Provider>      
        </DataPix.Provider>
    )
}