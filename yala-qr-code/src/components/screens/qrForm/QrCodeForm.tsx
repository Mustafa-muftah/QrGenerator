import React, { useState } from "react"
import { ColorPicker } from "../../colorPicker/ColorPicker"
import { InputFeild } from "../../global/InputFeild"
import validator from 'validator'
import { Title } from "../../global/Title"
import { useGenerateQrCode } from "../../../hooks/useGenerateQrCode"
import { Spinner } from "../../global/Spinner"

const ColorPickerMemo = React.memo(ColorPicker)


export const QrCodeForm: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const [color, setColor] = useState<string>("")
    
    const { mutate , isSuccess , data ,isLoading} = useGenerateQrCode()

    const handleFormSubmit = () => {
        validator.isURL(inputValue)&&
        mutate({inputValue,color})    
    }


    return (
        <div className="flex flex-col">
           <Title text={"Get your qr code"}/>
        <div className="flex items-center justify-center flex-col">
            <div className="flex flex-col w-80 m-auto h-screen-40" >
                <InputFeild value={inputValue} onChange={setInputValue} onSubmit={handleFormSubmit} />
            </div>
            <div className="flex flex-col w-60 m-auto" >
                <ColorPickerMemo color={color} setColor={setColor} />
            </div>
        </div>
        <div className="flex justify-center my-3">
            {isLoading && <Spinner/>}
            {isSuccess && 
            <img src={data.config.url}/>}
        </div>
        </div>
        )

}