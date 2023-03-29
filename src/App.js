import React, { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Grifinória',
      corPrimaria: '#8B0000',
      corSecundaria: '#FFD700',
    },
    {
      nome: 'Lufa-Lufa',
      corPrimaria: '#FFD700',
      corSecundaria: '#1C1C1C',
    },
    {
      nome: 'Corvinal',
      corPrimaria: '#00008B',
      corSecundaria: '#8B4513',
    },
    {
      nome: 'Sonserina',
      corPrimaria: '#006400',
      corSecundaria: '#A9A9A9'
    },
    {
      nome: 'Ministério da magia',
      corPrimaria: '#4B0082',
      corSecundaria: '#9400D3',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
    </div>
  );
}

export default App;
