import { useMutation, useQueryClient } from "react-query";
import axios from "axios"

export const generateQrCode = ({ inputValue, color }: { inputValue: string, color: string }) => {
    return axios.post(`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(inputValue)}&charset-source=UTF-8&color=${color.substring(1)}&bgcolor=${color.substring(1)} "`)
}


export const useGetQrCode = () => {

  const queryClient = useQueryClient()
 
    return useMutation(generateQrCode, {
        onSuccess: (data) => {
            queryClient.setQueryData(['qr'],(oldData:any ) =>{
                const allData = oldData || []
               return [ ...allData, data.config.url]
            } )
        }
    })}