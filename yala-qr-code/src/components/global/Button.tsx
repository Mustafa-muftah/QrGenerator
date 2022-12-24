import { useEffect } from "react";
import { buttonActions } from "../../types";

interface buttonProps {
    type:buttonActions,
    text: string,
    onClick:() => void;
}

 export const Button: React.FC<buttonProps> = ({type, text, onClick }) => {

    return (
    <>
         <button
                onClick={onClick}
                type={type}
                className="group relative  flex justify-center
                py-2 px-4 border border-transparent font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none  focus:ring-offset-2
                focus:ring-indigo-500 mt-3"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                {text}
              </button>
    </>
    )
}
