import axios from 'axios'
/* JWT secret key */
const KEY = process.env.JWT_KEY

const urlApi = process.env.URL_API_BACKEND

const remover = async (req, res) => {
  const { method } = req
  
  switch (method) {
    case 'DELETE':
      const { username } = req.body
      /* Caso o usuário ou senha ou email estiverem em branco... */
      if (!username ) {
        return res.status(400).json({
          success: false,
          message: 'Faltou enviar o usuário',
        })
      }
      try {
        const resposta = await axios.delete(`${urlApi}/remove/${username}` )          
        return res.status(201).json({
          success: true,
          message: resposta.data.message,
        })
      } catch (e) {
        if (e.code == 'ECONNREFUSED') {
          return res.status(500).json({
            success: false,
            message:
              'ECONNREFUSED: Não é possível se conectar à API no backend!',
          })
        }
        if (e.response.status == 400) {
          return res.status(400).json({
            success: false,
            message: e.response.data.message,
          })
        }
      }
  }
}
export default remover;
