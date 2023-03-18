import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComp from '../Components/Header';
import ClientesComp from '../Components/Clientes';
import SearchBarComp from '../Components/SearchBar';

function Home() {
  return (
    <main>
      <HeaderComp />
      <p>HomePage</p>
      <h1>Meus Produtos</h1>
      <SearchBarComp />
      <div className="dispProd">
        <ClientesComp />
        <ClientesComp />
        <ClientesComp />
        <ClientesComp />
      </div>
    </main>
  )
}

export default Home;