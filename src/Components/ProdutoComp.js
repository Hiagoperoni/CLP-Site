import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProdutoComp() {
  let nagigate = useNavigate();

  const paginaProduto = () => {
    return nagigate("/produtoX")
  }
  
  return (
    <section className="geralProd">
      <p>X</p>
      <p>Temp. Atual: X Cº</p>
      <p>Porta X</p>
    </section>
  )
}

export default ProdutoComp;