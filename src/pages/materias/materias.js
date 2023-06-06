import React from "react";
import imagem from '../image/seguranca.png';
import './style_materias.css';
import { Link } from 'react-router-dom';

function materias(){
    return(
        <div class="fundo_materias">
            <div className="logo_materias">
                <img  className='imagem_principal_materias' src={imagem}/>
                <h3 className='title_materias'>Safery First</h3>
            </div>

            <div>
                <h2 class="escolha">Escolha uma máteria para começar:</h2>
            </div>

            <div className="materias">
                <i class="bi bi-wrench-adjustable-circle-fill" id="icone_mec"></i>
                <Link id="mec"  className="buttonss" to="/mecanica">Mêcanica</Link>
               
                <i class="bi bi-egg-fried" id="icone_ali"></i>
                <Link id="ali"  className="buttonss" to="/alimenticia">Alímenticia</Link>
                
                <i class="bi bi-exclamation-octagon-fill" id="icone_seg"></i>
                <Link id="seg"  className="buttonss" to="/segurança">Segurança</Link>
            </div>
        </div>
     )
}


export default materias;