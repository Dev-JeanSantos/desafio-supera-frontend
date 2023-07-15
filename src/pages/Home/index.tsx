import React,  { useEffect, useState} from 'react';
import "./styles.scss";
import List from '../../core/components/List';
import Menu from '../../core/components/Menu';
import MenuSomatorio from '../../core/components/MenuSomatorio';
import { makeRequest } from '../../core/utils/request';
import { TransferenciaResponse } from '../../core/types/Transferencia';
import { useHistory } from 'react-router-dom';

const Home = () => {


    const [transferenciaResponse, setTransferenciaResponse] = useState<TransferenciaResponse>();

    useEffect(() =>{
        const params = {
            page: 1,
            linesPerPage: 4,
            nomeOperadorTransacao: ""
        }
        makeRequest({url:'/api/v1/banco/transferencias', params})
        .then(response => setTransferenciaResponse(response.data))
    },[]);

    const history = useHistory();

    const handlerCreate = () =>{
        history.push('/')
    }

    return (
        <div>
            <div className='home-container'>
                <div className="row home-content card-base border-radius-20">
                    <div className='content-base'>
                        <div className='content-card1'>
                            <div className='list-1'>
                                <input className='input-form'></input>
                                <input className='input-form'></input>
                                <input className='input-form'></input>
                                <button className='btn btn-primary btn-lg buton-form' onClick={handlerCreate}>
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