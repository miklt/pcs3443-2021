const LogoutBtn = (props) => {
  return (
    <button
      onClick={redirectToCreateAccount}
      className="w-full h-10 px-0 py-0 mb-6 font-bold text-white rounded bg-black-700 hover:bg-black-500"
    >
      Criar Conta
    </button>
  )
}
export default LogoutBtn
