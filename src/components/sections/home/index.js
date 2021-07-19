import React from 'react'
import * as S from './styled'
import Black from '../../../assets/black.png'

export default function Home() {
  return (
      <S.ContainerMenu>
        <img src={Black} alt="" />
        <div className="btn-class">
          <button className="btn-class-top"><a href="/">Cadastre-se</a></button>
          </div>
      </S.ContainerMenu>
  )
}
