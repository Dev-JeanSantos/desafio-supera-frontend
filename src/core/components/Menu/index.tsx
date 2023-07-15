import React from 'react';
import "./styles.scss";

const Menu = () => {
    return (
        <div className='card-base card-container'>
            <div className='row card-row'>
                <div className='col-4 text-center card-linha'>
                    <h4 className='text-linha'>DATA</h4>
                </div>
                <div className='col-2 text-center card-linha'>
                    <h4 className='text-linha'>VALOR</h4>
                </div>
                <div className='col-3 text-center  card-linha'>
                    <h4 className='text-linha'>TIPO</h4>
                </div>
                <div className='col-3 text-center '>
                    <h4 className='text-linha'>NOME DO OPERADOR</h4>
                </div>
            </div>
        </div>
    )
}

export default Menu;