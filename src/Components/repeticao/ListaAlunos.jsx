import React from 'react';
import alunos from '../../Data/Alunos';

export default props =>{
    const alunosJSX = alunos.map( (aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -- {aluno.nota}
            </li>
        )});

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {alunosJSX}
            </ul>
        </div>
    )
}