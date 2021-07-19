import React from 'react'
import * as S from './styled'
import Logo from '../../../assets/logo/logo2.png'

function TopNavBar() {
  return (
    <S.Container>
        <ul className="container-box-top">
          <li><a href="/">Home</a></li>
          <li><a href="/">Products</a></li>
          <img className="logo-center" src={Logo} alt="MGK os melhores uniformes do seu time" />
          <li><a href="/">Contact</a></li>
          <div className="btn-class">
          <button className="btn-class-top"><a href="#contacts">Cadastre-se</a></button>
          </div>
        </ul>
      
    </S.Container>
  )
}

export default TopNavBar;
