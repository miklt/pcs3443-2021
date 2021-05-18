import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import { ProfileCard, LoginLinkCard } from '../components/ProfileCard'
import {getAppCookies,verifyToken} from '../utilities/util'

const Profile = (props) => {  
  const { profile } = props

  return (
    <Layout title="Next.js e Autenticação JWT | Página do Perfil">
      <div className="container">
        <main>          
          {!profile ? <LoginLinkCard /> : <ProfileCard profile={profile} />}
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
  const profile = token ? verifyToken(token) : null  

  return {
    props: {  
      profile,      
    },
  }
}
export default Profile