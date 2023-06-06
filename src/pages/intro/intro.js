import React from "react";
import imagem from '../image/seguranca.png';
import './style_intro.css';
import { Link } from 'react-router-dom';


function intro(){
    return(
        <div class="fundo_intro">
           <div className="logo_intro">
                <img  className='imagem_principal_intro' src={imagem}/>
                <h3 className='title_intro'>Safery First</h3>
            </div>
            <div>
                <h2 className="crie">Crie seu avatar</h2>
            </div>

            <Link className="entrar_materias" to="/materias">
                <strong>Entrar</strong>
            </Link>
        </div>
    )
}
export default intro;