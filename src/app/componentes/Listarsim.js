export default async function Listarsim ({users}){
    await new Promise((resolve) => setTimeout(resolve,5000));
    return(
        <div> {users?.map((user, index) => 
            <p key={index}>{user.nome}</p>
    )}
            </div>
    )
}