import { useMutation, useQueryClient } from "react-query";
import axios from "axios"
import { useDispatch } from "react-redux";
import { addTohistoryList } from "../appState/HistorySlice";

 export const generateQrCode = ({inputValue,color}:{inputValue:string,color:string}) => {
 return  axios.post(`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(inputValue)}&charset-source=UTF-8&color=${color.substring(1)}&bgcolor=${color.substring(1)} "`)
 }


export const useGenerateQrCode = () => {
    const dispatch=useDispatch()
    return useMutation(generateQrCode,{
        onSuccess:(data) => { 
            dispatch(addTohistoryList(data.config.url!))
           
        }
    })
}