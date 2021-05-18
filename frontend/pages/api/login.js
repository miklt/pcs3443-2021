import axios from 'axios'

const urlApi = process.env.URL_API_BACKEND

const login = async (req, res) => {
  const { method } = req

  switch (method) {
    case 'POST':
      const { username, password } = req.body
      
      if (!username || !password) {
        return res.status(400).json({
          success: 'false',
          message: 'Faltou enviar o usuário ou a senha',
        })
      }
      try {
        const resposta = await axios.post(`${urlApi}/login`, {
          username: username,
          password: password,
        })

        const token = resposta.data.access_token
        return res.status(200).json({
          success: true,
          token: token,
        })
      } catch (e) {
        if (e.response.status == 401) {
          return res.status(401).json({
            success: false,
            message: 'Credenciais Inválidas',
          })
        }
      }
  }
}
export default login
