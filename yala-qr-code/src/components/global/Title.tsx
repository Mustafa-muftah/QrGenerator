

interface TitleProps {
    text:string
}

export const Title:React.FC<TitleProps> =({text})=> {
    return(
        <>
        <h1 className="font-bold text-center text-3xl text-uppercase">{text}</h1>
        </>
    )

}