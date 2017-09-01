export const getPostApi = async function (){
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET",
            mode: "cors"
        })

        const res = await data.json()
        return res.slice(0, 9)
    }catch(err){
        console.error(err.message)
    }
}