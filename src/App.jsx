import './App.css'
import React from 'react'
import Primeiro from './Components/basicos/Primeiro'
import ComParametro from './Components/basicos/ComParametro'
import Fragmento from './Components/basicos/Fragmento'
import NumAleatorio from './Components/basicos/NumAleatorio'
import Card from './Components/layout/Card'
import Familia from './Components/basicos/Familia'
import FamiliaReact from './Components/basicos/FamiliaReact'
import FamiliaMembro from './Components/basicos/FamiliaMembro'
import ListaAlunos from './Components/repeticao/ListaAlunos'
import TabelaProdutos from './Components/repeticao/TabelaProdutos'
import ParOuImpar from './Components/condicional/ParOuImpar'
import UsuarioInfo from './Components/condicional/UsuarioInfo'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
        <Card titulo="#08 - Renderização Condicional" color='#982395'>
            <ParOuImpar numero={31} />
            <UsuarioInfo usuario={{nome: 'Saulo'}} /> 
            <UsuarioInfo />
        </Card>
        <Card titulo="#07 - Repetição Produtos" color='#1E8449'>
            <TabelaProdutos />
        </Card>
        <Card titulo="#06 - Repetição Alunos" color='#EFEF4F'>
            <ListaAlunos  Alunos />
        </Card>
        <Card titulo="#05.5 - Família React" color='#EF4F89'>
            <FamiliaReact sobrenome="Silva">
                <FamiliaMembro nome="Saulo" />
                <FamiliaMembro nome="Alana" />
                <FamiliaMembro nome="Alice" />
            </FamiliaReact>
        </Card>
        <Card titulo="#05 - Família" color='#EF4F89'>
            <Familia sobrenome="Braga" />
        </Card>
        <Card titulo="#04 - Desafio Aleatório" color='#33BEFF'>
            <NumAleatorio numeroInicial={1} numeroFinal={20} />
            <NumAleatorio numeroInicial={1} numeroFinal={20} />
            <NumAleatorio numeroInicial={1} numeroFinal={20} />
        </Card>
        <Card titulo="#03 - Fragmento" color='#F633FF'>
            <Fragmento />
        </Card>
        <Card titulo="#02 - Com Parâmetro" color='#117D33'>
            <ComParametro
                titulo="Situação do Aluno"
                subtitulo="Pedro"
                nota={9.3} />
        </Card>
        <Card titulo="#01 - Primeiro Componente" color='#7D3811'>
            <Primeiro />
        </Card>
        </div>
    </div>
