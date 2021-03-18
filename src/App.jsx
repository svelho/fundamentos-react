import React from 'react'
import Primeiro from './Components/basicos/Primeiro'
import ComParametro from './Components/basicos/ComParametro'
import Fragmento from './Components/basicos/Fragmento'
import NumAleatorio from './Components/basicos/NumAleatorio'
import Card from './Components/layout/Card'

export default _ =>
    <div id="app">
        <h1>Fundamentos _ com arrow</h1>
        <Card titulo="#04 - Desafio Aleatório">
            <NumAleatorio numeroInicial={1} numeroFinal={20} /><br />
            <NumAleatorio numeroInicial={1} numeroFinal={20} /><br />
            <NumAleatorio numeroInicial={1} numeroFinal={20} /><br />
        </Card>
        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>
        <Card titulo="#02 - Com Parâmetro">
            <ComParametro
                titulo="Situação do Aluno"
                subtitulo="Pedro"
                nota={9.3} />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>

    </div>
