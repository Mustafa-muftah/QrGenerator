import { useSelector } from "react-redux";
import { RootState } from "../../../appState/Store";
import { Title } from "../../global/Title"
import { useQuery, useQueryClient } from "react-query";


export const History: React.FC = () => {
 
 const useQuery = useQueryClient()

 const data:string[] | undefined= useQuery.getQueryData(["qr"])
 
    return (
       <>
        <Title text={"History"}/>
        <div className="flex justify-center flex-col">
            <span className="my-4 font-bold text-center text-xl text-uppercase">Last Scanned Qr</span>
            <img className="sm:w-2/6 md:w-2/6 lg:w-1/6 m-auto" src={data&&data[data?.length!-1]!}/>
        </div>
        <div className="flex justify-center flex-col">
         <>
        <span className="my-4 font-bold text-center text-xl text-uppercase">All history</span>
        <div className="flex flex-wrap flex-row justify-center">
        {data && data.map((qrUrl ,index) => {
            return <img className="sm:w-2/6 md:w-2/6 lg:w-1/6 mx-2 my-2 flex" key={index} src={qrUrl}/>
        })}
        </div>
        </>
        </div>
        
       </>
        )

}