import React from 'react';
import "./styles.scss";
import Valor from '../Valor';
import { Transferencia } from '../../types/Transferencia';

type Props = {
    transferencia: Transferencia;
}

const Card = ({transferencia}: Props) => {
    return (
        <div className='card-base card-container'>
            <div className='row card-row'>
                <div className='col-4 text-center card-linha'>
                    <h4 className='text-linha'>{transferencia.dataTransferencia}</h4>
                </div>
                <div className='col-2 text-center card-linha'>
                    <Valor valor={transferencia.valor}/>
                </div>
                <div className='col-3 text-center  card-linha'>
                    <h4 className='text-linha'>{transferencia.tipo}</h4>
                </div>
                <div className='col-2 text-center '>
                    <h4 className='text-linha-operador'>{transferencia.nomeOperadorTransacao}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card;