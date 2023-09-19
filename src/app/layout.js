import '../app/globals.css'
export const metadata = {
  title: 'PAGINA DO PABLO',
  description: 'Project for class PTAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}

//aqui é onde ira definir nossas pagina e estilização , ou seja , o children vai pegar todas as paginas que tiver com "page.js" , pelo oque eu entendi , ele é como se fosse um props de uma maneira diferente que utiliza componentização.
