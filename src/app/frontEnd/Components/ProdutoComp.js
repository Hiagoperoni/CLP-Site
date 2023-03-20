import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProdutoComp(props) {
  let navigate = useNavigate();

  const paginaProduto = () => {
    return navigate("/produtoX")
  }
  
  return (
    <section className="geralProd">
      <p>Freezer {props.id}</p>
      <p>Temp. Atual: {props.temp}Cº</p>
      <p>Porta {props.porta}</p>
    </section>
  )
}

export default ProdutoComp;