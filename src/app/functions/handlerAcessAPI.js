'use server'
const url ="https://aula-17-10-main-kwjg.vercel.app";

const getUserAuthenticated = async (user) => {

   const responseOffApi = await fetch(url + "/user/authenticated",
    {
        method: "POST",
        headers: {"Content-Type" : "application/json"}, 
        body: JSON.stringify(user)
    }
    )
const Listade = await responseOffApi.json();
return Listade;
}


const postUser = async (user) => {

    const responseOffApi = await fetch(url + "/user",
     {
         method: "POST",
         cache:"no-cache",
         headers: {"Content-Type" : "application/json"}, 
         body: JSON.stringify(user)
     }
     )
 const userSavee = await responseOffApi.json();
 console.log(userAuth)
 return userSavee;
 }






const getUsers = async (user) => {

    const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
    const useAuth = await responseOfApi.json();
    return useAuth;
}

const updateUser =  async (user,id)=>{
    try{

        const responseOffApi = await fetch(url + "/user/" +id ,
        {
            method: "PUT",
            cache:"no-cache",
            headers: {"Content-Type" : "application/json"}, 
            body: JSON.stringify(user)
        }
        )
    const userUp= await responseOffApi.json();
    return userUp;
    }catch{
return null
    }
   
}

export { getUsers, getUserAuthenticated, postUser, updateUser};