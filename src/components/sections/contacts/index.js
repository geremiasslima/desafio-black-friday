import React, { useState } from 'react'
import * as S from './styled'


function Contacts() {
  const [ email, setEmail ] = useState('')

  const savedMail = (chave, valor) => {
    localStorage.setItem(chave, valor)
  }

  return (
    <S.ContainerHome>
      <div className="container-form">          
           <h1>Cadastre-se para ficar por dentro de todas as nossas ofertas!!</h1>        
        <S.Input type="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o seu e-mail"/>
        <S.Button type="submit" onClick={() => savedMail('ls_email', email)}>Cadastre-se</S.Button>          
      </div>
    </S.ContainerHome>
  )
}

export default Contacts;
