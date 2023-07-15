import React from 'react';
import "./styles.scss";
import Card from '../Card';
import { Transferencia } from '../../types/Transferencia';

type Props = {
    transferencia: Transferencia;
}

const List = ({transferencia}:Props) => {
    return (
        <div>
            <Card transferencia={transferencia}/>
        </div>
    )
}

export default List;