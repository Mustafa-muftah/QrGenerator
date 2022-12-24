import { Title } from "../../global/Title"
import { useQuery, useQueryClient } from "react-query";


export const History: React.FC = () => {
 
 const useQuery = useQueryClient()

 const allQr = useQuery.getQueryData(["qr"]) as string[]
 
    return (
       <>
        <Title text={"History"}/>
        <div className="flex justify-center flex-col">
            <span className="my-4 font-bold text-center text-xl text-uppercase">Last Scanned Qr</span>
            <img className="sm:w-2/6 md:w-2/6 lg:w-1/6 m-auto" src={allQr[allQr.length!-1]}/>
        </div>
        <div className="flex justify-center flex-col">
         <>
        <span className="my-4 font-bold text-center text-xl text-uppercase">All history</span>
        <div className="flex flex-wrap flex-row justify-center">
        {allQr.map((qrUrl ,index) => {
            return <img className="sm:w-2/6 md:w-2/6 lg:w-1/6 mx-2 my-2 flex" key={index} src={qrUrl}/>
        })}
        </div>
        </>
        </div>
        
       </>
        )

}