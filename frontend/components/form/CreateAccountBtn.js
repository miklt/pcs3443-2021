import Cookies from 'js-cookie'
import Router from 'next/router'

const CreateAccountBtn = () => {
  const redirectToCreateAccount = () => {
    //console.log('dentro do redirect')
    Router.push('/register') //redireciona para a tela de cadastro.
  }

  return (
    <button
      onClick={redirectToCreateAccount}
      className="w-full h-10 px-0 py-0 mb-6 font-bold text-white bg-pink-700 rounded hover:bg-pink-500"
    >
      Criar Conta
    </button>
  )
}

export default CreateAccountBtn
