import Cookies from 'js-cookie'
import Router from 'next/router'

const LogoutBtn = () => {
  const redirectToLoginPage = () => {
    Cookies.remove('token')
    Router.push('/') //redireciona para a tela de cadastro.
  }
  return (
    <button
      onClick={redirectToLoginPage}
      className="w-full h-10 px-0 py-0 mb-6 font-bold text-white bg-pink-700 rounded hover:bg-pink-500"
    >
      Deslogar
    </button>
  )
}

export default LogoutBtn
