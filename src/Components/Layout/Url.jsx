import { useParams } from "react-router-dom"

export const Url=()=>{
    let {userid}=useParams()
    return(
        <>
        <h1>VALUE is:{userid}</h1>
        </>
    )
}