import React from 'react';
import "./styles.scss";

const MenuSomatorio = () => {
    return (
        <div className='card-base card-container'>
            <div className='row card-row'>
                <div className='col-6 text-center card-linha'>
                    <h4 className='text-linha-menu-somatorio'>Saldo Total: </h4>
                </div>
                <div className='col-6 text-center'>
                    <h4 className='text-linha-menu-somatorio'>Saldo no Período: </h4>
                </div>
            </div>
        </div>
    )
}

export default MenuSomatorio;