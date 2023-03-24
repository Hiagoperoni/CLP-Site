import React, { useState } from 'react';
import zonaUm from '../../backEnd/teste/gerarFreezers.js';
import ProdutoComp from '../Components/ProdutoComp';
import { useNavigate } from 'react-router-dom';
import HeaderComp from '../Components/HeaderComp.js';

function Produto() {
  const navigate = useNavigate();
  const goToZoom = (id) => {
    navigate(`/produto/${id}`)
  }
  return (
    <main className="homePage">
      <HeaderComp />
      <h1>Painel da Planta 01</h1>
      <div className="dispProd">
        {
          zonaUm.map((cadaFreezer) => 
          <div key={ cadaFreezer.id } onClick={ () => goToZoom(cadaFreezer.id) }>
            <ProdutoComp 
              id={ cadaFreezer.id }
              temp={ cadaFreezer.temp }
              porta={ cadaFreezer.porta }
              />
          </div>
            )
        }
      </div>
    </main>
  )
}

export default Produto;