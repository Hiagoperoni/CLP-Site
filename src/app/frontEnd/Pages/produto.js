import React, { useState } from 'react';
import zonaUm from '../../backEnd/teste/gerarFreezers.js';
import ProdutoComp from '../Components/ProdutoComp';

function Produto() {

  return (
    <main>
      <h1>Planta 01</h1>
      <div className="dispProd">
        {
          zonaUm.map((cadaFreezer) => <ProdutoComp 
            key={ cadaFreezer.id }
            id={ cadaFreezer.id }
            temp={ cadaFreezer.temp }
            porta={ cadaFreezer.porta }
            />)
        }
      </div>
    </main>
  )
}

export default Produto;