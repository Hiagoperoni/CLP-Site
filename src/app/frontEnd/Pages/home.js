import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComp from '../Components/HeaderComp';
import PlantaComp from '../Components/PlantaComp';

function Home() {
  return (
    <main className="homePage">
      <HeaderComp />
      <p>HomePage</p>
      <h1>Meus Produtos</h1>
      <div className="dispProd">
        <PlantaComp />
        <PlantaComp />
      </div>
    </main>
  )
}

export default Home;