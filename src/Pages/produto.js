import React, { useState } from 'react';
import ProdutoComp from '../Components/ProdutoComp';

function Produto() {
  return (
    <main>
      <h1>Planta 01</h1>
      <div className="dispProd">
        <ProdutoComp />
        <ProdutoComp />
        <ProdutoComp />
        <ProdutoComp />
        <ProdutoComp />
      </div>
    </main>
  )
}

export default Produto;