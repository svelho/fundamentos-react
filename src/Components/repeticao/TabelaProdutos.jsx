import './TabelaProdutos.css'
import React from 'react';
import Produtos from '../../Data/Produtos';

export default props => {

    function getProdutos() {
        return Produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Impar'} >
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        });
    }


    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <th>
                        Id
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Preço
                    </th>
                </thead>
                <tbody>
                    {getProdutos()}
                </tbody>
            </table>
        </div>
    )
}