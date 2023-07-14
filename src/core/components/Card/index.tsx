import React from 'react';
import "./styles.scss";

const Card = () => {
    return (
        <div className='card-base card-container'>
            <div className='row card-row'>
                <div className='col-2 text-center card-linha'>
                    <h4 className='text-linha'>14/02/2019</h4>
                </div>
                <div className='col-3 text-center card-linha'>
                    <h4 className='text-linha'>30895,46</h4>
                </div>
                <div className='col-3 text-center  card-linha'>
                    <h4 className='text-linha'>DEPOSITO</h4>
                </div>
                <div className='col-4 text-center '>
                    <h4 className='text-linha'>FULANO</h4>
                </div>
            </div>
        </div>
    )
}

export default Card;