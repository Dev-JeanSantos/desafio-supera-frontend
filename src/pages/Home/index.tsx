import React from 'react';
import "./styles.scss";
import List from '../../core/components/List';

const Home = () => (
    <div>
        <div className='home-container'>
            <div className="row home-content card-base border-radius-20">
                <div className='content-base'>
                    <div className='content-card1'>
                        <div className='dados-list'>
                            <button className='btn btn-primary btn-lg'>
                                BUSCAR
                            </button>
                        </div>
                    </div>
                    <div className='content-card2'>
                        <List />
                        <List />
                        <List />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Home;