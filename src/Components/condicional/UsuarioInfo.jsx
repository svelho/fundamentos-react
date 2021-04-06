import React from 'react'
import If, {Else} from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo usuário <strong>{usuario.nome}</strong>
                <Else>Seja bem vindo amigo!</Else>
            </If>
            {/* <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Bonitão</strong>
            </If> */}

        </div>
    )
}

