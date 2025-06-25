export const GetApis = async({params}) => {
    let id = params.movieID;
  try{
    let data= await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
    let res=await data.json()
    console.log(res);
    return res;
  }catch(err){
    console.log(err);
  } 
  
}