'use server'

const Users = [{
    nome:'pablo',
    email:'pablo@gmail.com',
    senha:'12345',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},{
    nome:'maria',
    email:'maria@gmail.com',
    senha:'12345',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},{
    nome:'maylla',
    email:'maylla@gmail.com',
    senha:'12345',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},{
    nome:'lindo',
    email:'lindo@gmail.com',
    senha:'12345',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
}
//aqui serão os usuarios que seram registrados ou cadastrados no nosso formulário
];

const getUserAuthenticated = (user) => {
    let userAuth = {};//variavel para definir usuarios autenticados

Users.map((user)=>{
    if (user.email === user.email & user.senha === user.password){
        userAuth = user
    }
}) 
// mapeamento para definir os requisitos dos usuarios a serem preenchidos para registrar o usuario
return userAuth;
}
const getUsers = () => {
    return Users;
}
export {getUsers, getUserAuthenticated};

//aqui é aonde vai analisar o usuario autenticado pelo email , senha e também (opcional pelo nome)