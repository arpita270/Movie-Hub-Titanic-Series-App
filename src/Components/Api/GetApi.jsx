export const GetApi = async() => {
try{
    let data = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1")
    let res = await data.json()
    return res
}catch(err){
    console.log(err);
}
}