import Cookies from 'js-cookie'
import Router from 'next/router'

const LinkToLoginBtn = () => {
  const redirectToLoginPage = () => {
    Router.push('/') //redireciona para a tela de cadastro.
  }
  return (
    <button
      onClick={redirectToLoginPage}
      className="w-full h-10 px-0 py-0 mb-6 font-bold text-white bg-blue-700 rounded hover:bg-blue-500"
    >
      Ir para a Tela de Login
    </button>
  )
}

export default LinkToLoginBtn
