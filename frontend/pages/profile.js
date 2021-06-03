import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import LogoutBtn from '../components/form/LogoutBtn'
import LoginBtn from '../components/form/LoginBtn'
import { ProfileCard } from '../components/ProfileCard'
import { getAppCookies, verifyToken } from '../utilities/util'

const Profile = (props) => {
  const { profile, error } = props

  return (
    <Layout title="Perfil">
      <div className="container">
        <main>
          {!profile || error ? (
            <div className="flex flex-col">
              <span className="bg-yellow-300">
                O perfil não pode ser carregado.
              </span>
              <span className="bg-yellow-300">Mensagem Erro: {error}</span>
              <LoginBtn className="" />
            </div>
          ) : (
            <div>
              <ProfileCard profile={profile} />
              <LogoutBtn />
            </div>
          )}{' '}
        </main>
      </div>
    </Layout>
  )
}
export async function getServerSideProps(context) {
  const { req } = context
  const { token } = getAppCookies(req)
  let profile = null
  let error = null
  try {
    profile = verifyToken(token)
  } catch (e) {
    return {
      props: {
        profile,
        error: e.message,
      },
    }
  }
  return {
    props: {
      profile,
      error,
    },
  }
}
export default Profile
