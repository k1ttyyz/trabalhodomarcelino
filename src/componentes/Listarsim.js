export default async function Listarsim ({users}){
    await new Promise((resolve) => setTimeout(resolve,5000));
    return(
        <div> {users?.map((user, index) => 
            <p key={index}>{user.nome}</p>
    )}
            </div>
    )
}

// aqui é um componente onde ira gerar uma lista de usuarios que demora 5 segundos para aparecer , como no middleware a
// gente pegou o token para validar como forma de argumento , aqui seria a "mesma" coisa , a gente pega os usuarios que foram registrados no handler
// e mostra eles na lista como forma de argumento.