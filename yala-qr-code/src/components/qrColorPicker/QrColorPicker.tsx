import React, {  Dispatch, useState } from "react"
import { CirclePicker } from "react-color"
import { buttonActions } from "../../types"
import { Button } from "../global/Button"
import "./ColorPicker.css"

interface colorPickerProps{
    color:string
    setColor: Dispatch<React.SetStateAction<string>>
}

export const ColorPicker: React.FC<colorPickerProps> = ({color,setColor}) => {
    const [isPickerVisible, setPickerVisible] = useState<boolean>(false)
  
    return (<>
        <Button type={buttonActions.button} text={"Choose Qr color"} onClick={() => setPickerVisible(!isPickerVisible)} />
        {isPickerVisible &&
        <div className="mt-2">
            <CirclePicker
                color={color}
                onChange={e => {
                    setColor((e.hex))
                    setPickerVisible(false)
                }}
            />
            </div>
            }
    </>)

}