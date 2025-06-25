import { useLoaderData } from "react-router-dom"
import { Display } from "./UI/Display"
export const Service = () => {
  let list = useLoaderData()
  console.log(list);
  return (
    <>
    <h1>T I T A N I C</h1>
   <ul className="container grid grid-four--cols">
    {list && list.Search.map((val)=>{
      return <Display key={val.imdbID} val={val}/>
    })}
   </ul>
    </>
  )
}