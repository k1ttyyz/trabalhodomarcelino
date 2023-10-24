'use server'
const url ="https://aula-17-10-main-gilt.vercel.app";

const getUserAuthenticated = async (user) => {

   const responseOffApi = await fetch(url + "/user/authenticated",
    {
        method: "POST",
        cache:"no-cache",
        headers: {"Content-Type" : "application/json"}, 
        body: JSON.stringify(user)
    }
    )
const userAuth = await responseOffApi.json();
console.log(userAuth)
return userAuth;
}
const getUsers = async (user) => {

    const responseOfApi = await fetch(url + "/users", {cache:"no-cache"})
    const useAuth = await responseOfApi.json();
    return useAuth;

}

export { getUsers, getUserAuthenticated};