import React from 'react';

export default function NumAleatorio(props) {
    const min = props.numeroInicial;
    const max = props.numeroFinal;
    const numAle = Math.round(Math.random() * (max - min) + min);
    return (
        <div>
            <strong>O número é: {numAle}</strong>
        </div>

    )
}
