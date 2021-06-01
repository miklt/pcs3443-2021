import React from 'react'

const ProfileCard = ({ profile }) => {
  return (
    <div className="container flex-col ">
      <div className="mt-2 text-left">
        <h3 className="text-xl text-blue-500 txt-center">
          Dados do seu perfil
        </h3>

        <div>
          <span className="text-xl">Username:</span>
          <span className="text-lg text-green-700">{profile.username}</span>
        </div>
        <div>
          <span className="text-xl">Email:</span>
          <span className="text-lg text-red-700">{profile.email}</span>
        </div>
        <div>
          <span className="text-xl">Id do Token:</span>
          <span className="text-sm text-red-700">{profile.jti}</span>
        </div>
      </div>
    </div>
  )
}
export { ProfileCard }
