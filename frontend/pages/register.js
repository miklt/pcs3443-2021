import Layout from '../components/layout/Layout'
import RegisterForm from '../components/form/RegisterForm'
import Router from 'next/router'
import { FORM_REGISTER_DATA, BASE_URL } from '../components/schemas/forms'
import { useState } from 'react'

export default function RegisterPage() {
  const [stateFormData, setStateFormData] = useState(FORM_REGISTER_DATA) // estado com os dados do formulário
  const [stateFormError, setStateFormError] = useState([]) // estado para armezar os erros
  const [stateFormValid, setStateFormValid] = useState(false) // o estado inicial da validez do formulário é false
  const [loading, setLoading] = useState(false) // inicializa com false o estado da variável loading
  const [stateFormMessage, setStateFormMessage] = useState({}) // inicializa com vazia o objeto mensagem

  function onChangeHandler(e) {
    const { name, value } = e.currentTarget // recupera os valores

    setStateFormData({
      ...stateFormData,
      [name]: {
        ...stateFormData[name],
        value,
      },
    })
  }

  async function onSubmitHandler(e) {
    e.preventDefault()

    /* username */
    let data = { ...stateFormData } 
    /* Aqui filtramos o conteúdo do stateFormData para que apenas os atributos username,email e 
    password sejam passados para o endpoint 
    */
    data = { ...data, username: data.username.value || '' }
    /* email */
    data = { ...data, email: data.email.value || '' }
    /* password */
    data = { ...data, password: data.password.value || '' }

    
    /* validation handler */
    // const isValid = validationHandler(stateFormData) // a validação não será apresentada agora

    const isValid = true

    if (isValid) {
      // Call an external API endpoint to get posts.
      // You can use any data fetching library
      setLoading(!loading)
      // não esquecer de configurar o CORS no backend!
      const registerApi = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.error('Error:', error)
      })
      let result = await registerApi.json()
      if (result.success) {
        Router.push('/') //redireciona para a tela de login.
      } else {
        setStateFormMessage(result)
      }
      setLoading(false)
    }
  }

  return (
    <Layout>
      <RegisterForm
        props={{
          onSubmitHandler,
          onChangeHandler,
          loading,
          stateFormData,
          stateFormError,
          stateFormMessage,
        }}
      />
    </Layout>
  )
}
