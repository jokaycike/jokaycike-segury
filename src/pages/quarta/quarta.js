import {React} from 'react';
import './styles_quarta.css';
import imagem from '../image/seguranca.png';
import { click } from '@testing-library/user-event/dist/click';
import { Link } from 'react-router-dom';


function quarta(){
    let dia = []
    for(let i =1;i<=31;i++){
        dia.push(<option>{i}</option>)
    } 

    let ano = []
    for(let i =1952;i<=2005;i++){
        ano.push(<option>{i}</option>)
    } 
    return(

        <div className='fundo_quarta'>
            <div className="logo_quarta">
                <img  className='imagem_principal_quarta' src={imagem}/>
                <h3 className='title_quarta'>Safery First</h3>
            </div>

            <div className='resto_quarta'>
                <h2 className='subtitle_quarta'>Entrar</h2>
                <p className='idade'>Qual a sua idade?</p>
            </div>
          


            <div className='dia_mes_ano'>
                <select id="dia">
                    <option selected disabled value="">Dia</option>
                    {dia}
                </select>

                <select id="mes">
                    <option selected disabled value="">Mês</option>
                    <option>janeiro</option>
                    <option>feveiro</option>
                    <option>março</option>
                    <option>abril</option>
                    <option>maio</option>
                    <option>junho</option>
                    <option>julho</option>
                    <option>agosto</option>
                    <option>setembro</option>
                    <option>outubro</option>
                    <option>novembro</option>
                    <option>dezembro</option>
                
                </select>

                <select id="ano">
                    <option selected disabled value="">Ano</option>
                    {ano}
                </select>
            </div>

            <div className='area'>
            <select id="area_trabalho">
                <option selected disabled value="">Área de trabalho</option>
                <option>Mêcanica</option>
                <option>Elétrica</option>
                <option>Desenvolvimento de Sistemas</option>
                <option>Manutenção Mecânica</option>
                <option>Tornearia</option>
                <option>Operador de caminhao</option>
                <option>Operador de carga </option>
                <option>Programador da produção</option>
                <option>Segurança alimenticia</option>
            </select>
            </div>

            <div className='area' >
            <select id="genero">
                <option selected disabled value="">Gênero</option>
                <option>Feminino</option>
                <option>Masculino</option>
                <option>Não identificar</option>
                <option>Nenhuma das alternativas</option>
            </select>
            </div>
            
            <fieldset id="termos">
                <div>
                    <input type="checkbox"  name="termos"/>
                    <label for="termos"> Aceito os <strong>Termos e Condiçoes de uso do Safery First e a Política de Privacidade</strong></label>
                </div>
            </fieldset>

            <Link id="entrar" to="/terceira">
                <strong>Entrar</strong>
            </Link>
        </div>  
        
        
    )
}

export default quarta; 
