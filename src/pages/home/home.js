import React from 'react'
import imagem from '../image/seguranca.png';
import { Link } from 'react-router-dom';
import './styles.css';

function home(){
    return (
        <div className='container'>
            <div className="logo">
                <img  className='imagem_principal' src={imagem}/>
                <h3 className='title'>Safery First</h3>
                </div>
                    
                <div className='resto'>    
                <h2 className='subtitle'>Estudar sobre segurança do trabalho, nunca foi tão divertido </h2>
                <div className='button'>
                    <Link id="buttonins" className="buttons-login" to="/segunda ">
                        <strong>Inscreva-se grátis</strong>
                    </Link>
                    <Link id="buttonent" className="buttons-login" to="/terceira">
                        <strong>Entrar</strong>
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}

export default home;