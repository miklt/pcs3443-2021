function RegisterForm({ props }) {
  const {
    onSubmitHandler,
    onChangeHandler,
    stateFormData,
    stateFormError,
    loading,
    stateFormMessage,
  } = props;
  return (
    <form
      onSubmit={onSubmitHandler}
      method="POST"
    >
      <div>
        <label className="block mb-2 text-indigo-500" htmlFor="username">
          username
        </label>
        <input
          className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-100"
          type="text"
          name="username"
          value={stateFormData.username.value}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label className="block mb-2 text-indigo-500" htmlFor="email">
          email
        </label>
        <input
          className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-100"
          type="text"
          name="email"
          value={stateFormData.email.value}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label className="block mb-2 text-indigo-500" htmlFor="password">
          {' '}
          password
        </label>
        <input
          className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-100"
          type="password"
          name="password"
          value={stateFormData.password.value}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <input
          className="w-full px-4 py-2 mb-6 font-bold text-white bg-indigo-700 rounded hover:bg-blue-200"
          type="submit"
          value="Cadastrar"
        ></input>
      </div>
      <div><span className="bg-yellow-200">{stateFormMessage.message}</span></div>
    </form>
  )
}
export default RegisterForm
