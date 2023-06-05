import React from 'react';
import './styles_segunda.css';
import imagem from '../image/seguranca.png';
import { Link } from 'react-router-dom';

function segunda(){
    return (
        <div className='fundo'>
            <div className="logo_principal">
                <img  className='imagem_principal_segunda' src={imagem}/>
                <h3 className='title_principal'>Safery First</h3>
            </div>

            <div className='resto_pagina'>    
                <h2 className='subtitle_principal'>Inscreva-se grátis no Safery first </h2>
            <div className='questionario'>
                <i class="bi bi-envelope-at-fill" id='icone_email'></i>
                <input type='email' placeholder='E-mail' className='email' required></input>
                <i class="bi bi-eye-fill" id='icone_ocultar'></i>
                <input type='password' placeholder='Criar senha' className='senha' required></input>
                <i class="bi bi-building-fill-lock" id='icone_codigo'></i>
                <input type='text' placeholder='Código da industria' className='codigo' required></input>
            
            </div>   
            <Link className='continuar' to="/quarta">
                <strong>Continuar</strong>
            </Link>
           
                
            </div>
        </div> 
       
    )
}

export default segunda;