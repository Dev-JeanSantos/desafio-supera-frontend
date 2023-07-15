import React from 'react';
import './styles.scss'

type Props = {
    valor: number;
}

const formatValor = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(valor);
}

const Valor = ({valor}: Props) => (
    <div className="valor-container">
        <span className="valor-currency">R$</span>
        <h3 className="valor">
            {formatValor(valor)}
        </h3>
    </div>

);

export default Valor;