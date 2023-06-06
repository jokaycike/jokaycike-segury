import React from "react";
import './styles_terceira.css';
import imagem from '../image/seguranca.png';
import { Link } from 'react-router-dom';

function terceira(){
    return(
        <div className='fundo_terceira'>
            <div className="logo_prin">
                <img  className='imagem_principal_terceira' src={imagem}/>
                <h3 className='title_prin'>Safery First</h3>
            </div>

            <div className='resto_pag'>
                <h2 className='subtitle_terceira'>Entrar</h2>

                <div className='questionario_terceira'>
                    <i className="bi bi-envelope-at-fill" id='icone_email_terceira'></i>
                    <input type="email" placeholder="E-mail" className="email_terceira" required/>
                    <i class="bi bi-eye-fill" id='icone_ocultar_terceira'></i>
                    <input type='password' placeholder='Criar senha' className='senha_terceira' required></input>
                </div>

                <Link className="entrar_terceira" to="/intro">
                    <strong>Entrar</strong>
                </Link>
                
            </div>
        </div>
    )
}
export default terceira;