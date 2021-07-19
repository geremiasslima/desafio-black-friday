import React from 'react'
import * as S from './styled'
import Brasil from '../../../assets/products/brasil.png'
import Psg from '../../../assets/products/psg.png'
import City from '../../../assets/products/city.png'

function Products() {
  return (
    <S.Container>
      <div className="row">
      <div className="coluna">
      <img src={Brasil} alt="Uniformes originais da seleção brasileira"  />
      <h3>Promoções</h3>
      </div>
      <div className="coluna">
        <img src={Psg} alt="Uniformes do PSG" />
        <h3>Promoções</h3>
      </div>
      <div className="coluna">
        <img src={City} alt="Uniformes do melhores times da liga inglesa"  />
        <h3>Promoções</h3>
      </div>
      </div>
        
    </S.Container>
  )
}

export default Products;
