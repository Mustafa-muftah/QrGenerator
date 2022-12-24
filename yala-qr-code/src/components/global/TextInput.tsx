import { Dispatch, SetStateAction } from "react";
import { buttonActions } from "../../types";
import { Button } from "./Button";

interface inputFeildProps {
    value:string,
    onChange:Dispatch<SetStateAction<string>>,
    label:string,
}

export const InputFeild: React.FC<inputFeildProps> = ({value , onChange , label}) => {

    return (
    <>
          <div className="flex flex-col mt-5">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label  className="sr-only">
                  {label}
                </label>
                <input
                  value={value}
                  onChange={ e => onChange(e.target.value)}
                  type="text"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Url"
                />
              </div>
            </div>
            </div>
    </>
  )
}

