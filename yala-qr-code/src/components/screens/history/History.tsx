import { useSelector } from "react-redux";
import { RootState } from "../../../appState/Store";
import { Title } from "../../global/Title"


export const History: React.FC = () => {
    const history = useSelector((state: RootState) => state.history);

    return (
       <>
        <Title text={"History"}/>
        <div className="flex justify-center flex-col">
            <span className="my-4 font-bold text-center text-xl text-uppercase">Last Scanned Qr</span>
            <img className="w-2/6 m-auto" src={history.history[history.history.length-1]!}/>
        </div>
        <div className="flex justify-center flex-col">
         <>
        <span className="my-4 font-bold text-center text-xl text-uppercase">All history</span>
        <div className="flex flex-wrap flex-row justify-center">
        {history.history.map((qrUrl ,index) => {
            return <img className="w-2/6 mx-2 my-2 flex" key={index} src={qrUrl}/>
        })}
        </div>
        </>
        </div>
        
       </>
        )

}