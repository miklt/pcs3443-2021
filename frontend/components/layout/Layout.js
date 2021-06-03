import Header from './Header'
import Footer from './Footer'
import Image from 'next/image'

export default function Layout({ children, title }) {
  //console.log({title},"SDSD")
  const t = title
  return (
    <div className="flex flex-col justify-between h-screen max-w-sm pt-5 mx-auto text-center">
      <Image
        className="flex"
        src="/logo.jpg"
        alt="PCS Logo"
        width="300"
        height="150"
      />
      <div className="flex flex-col font-mono">
        <span className="text-lg font-semibold">
          Aplicação de Exemplo para a disciplina PCS3443
        </span>
        <span className="text-sm">
          Exemplo de Login com autenticação usando JWT
        </span>
      </div>
      <Header title={t} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
