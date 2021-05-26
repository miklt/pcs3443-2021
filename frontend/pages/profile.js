import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import { ProfileCard, LoginLinkCard } from '../components/ProfileCard'
import { getAppCookies, verifyToken } from '../utilities/util'

const Profile = (props) => {
  const { profile, error } = props

  return (
    <Layout title="Next.js e Autenticação JWT | Página do Perfil">
      <div className="container">
        <main>
          {!profile ? <LoginLinkCard /> : <ProfileCard profile={profile} />}
          {error ? (
            <span className="text-yellow-200 bg-red-500">Erro: {error}</span>
          ) : (
            <div></div>
          )}
        </main>
      </div>
    </Layout>
  )
}
export async function getServerSideProps(context) {
  const { req } = context

  //const { origin } = absoluteUrl(req)

  //const baseApiUrl = `${origin}/api/about`

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

  console.log(profile, 'dentro do getServerProfilePage')

  return {
    props: {
      profile,
      error,
    },
  }
}
export default Profile
