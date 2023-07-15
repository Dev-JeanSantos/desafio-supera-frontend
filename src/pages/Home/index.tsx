import React,  { useEffect, useState} from 'react';
import "./styles.scss";
import List from '../../core/components/List';
import Menu from '../../core/components/Menu';
import MenuSomatorio from '../../core/components/MenuSomatorio';
import { makeRequest } from '../../core/utils/request';
import { TransferenciaResponse } from '../../core/types/Transferencia';

const Home = () => {


    const [transferenciaResponse, setTransferenciaResponse] = useState<TransferenciaResponse>();

    console.log(transferenciaResponse);

    useEffect(() =>{
        const params = {
            page: 1,
            linesPerPage: 4,
            nomeOperadorTransacao: ""
        }
        makeRequest({url:'/api/v1/banco/transferencias', params})
        .then(response => setTransferenciaResponse(response.data))
    },[]);

    return (
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
                            <MenuSomatorio />
                            <Menu />
                            {transferenciaResponse?.content.map(transferencia =>(
                            <List transferencia={transferencia} />
                            ))}                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;