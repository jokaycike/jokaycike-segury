import React from 'react';
import './styles_quarta.css';
import imagem from '../image/seguranca.png';

function quarta(){
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
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>  
                    <option>31</option>
                </select>

                <select id="mês">
                <option selected disabled value="">Mês</option>
                    <option>Janeiro</option>
                    <option>Fevereiro</option>
                    <option>Março</option>
                    <option>Abril</option>
                    <option>Maio</option>
                    <option>Junho</option>
                    <option>Julho</option>
                    <option>Agosto</option>
                    <option>Setembro</option>
                    <option>Outubro</option>
                    <option>Novembro</option>
                    <option>Dezembro</option>
                </select>

                <select id="ano">
                    <option selected disabled value="">Ano</option>
                    <option>1952</option>
                    <option>1951</option>
                    <option>1953</option>
                    <option>1954</option>
                    <option>1955</option>
                    <option>1956</option>
                    <option>1957</option>
                    <option>1958</option>
                    <option>1959</option>
                    <option>1960</option>
                    <option>1961</option>
                    <option>1962</option>
                    <option>1963</option>
                    <option>1964</option>
                    <option>1965</option>
                    <option>1966</option>
                    <option>1967</option>
                    <option>1968</option>
                    <option>1969</option>
                    <option>1970</option>
                    <option>1971</option>
                    <option>1972</option>
                    <option>1973</option>
                    <option>1974</option>
                    <option>1975</option>
                    <option>1976</option>
                    <option>1977</option>
                    <option>1978</option>
                    <option>1979</option>
                    <option>1980</option>
                    <option>1981</option>
                    <option>1982</option>
                    <option>1983</option>
                    <option>1984</option>
                    <option>1985</option>
                    <option>1986</option>
                    <option>1987</option>
                    <option>1988</option>
                    <option>1989</option>
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>  
                    <option>2005</option>
                </select>
            </div>

            <div>
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

            <div >
            <select id="genero">
                <option selected disabled value="">Gênero</option>
                <option>Feminino</option>
                <option>Masculino</option>
                <option>Não identificar</option>
                <option>Nenhuma das alternativas</option>
            </select>
            </div>
            
            <fieldset>
                <div>
                    <input type="checkbox" id="termos" name="termos"/>
                    <label for="termos"> Aceito os <strong>Termos e Condiçoes de uso do Safery First e a Política de Privacidade</strong></label>
                </div>
            </fieldset>
        </div>    
    )
}

export default quarta; 