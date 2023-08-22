import './index.scss';

export default function Cadastro() {




    return(
        <div className='pagina-cadastro'>
            <div className='cadastro'>
                <div className='pri-frame'>
                    <img src='' />
                    <h1> Quero criar uma conta </h1>
                </div>



                <div className='seg-frame'>
                    <div id='name'> 
                        <p> Nome completo </p>
                        <input type='text'  />
                    </div>

                    <div id='data'> 
                        <p> Data de nascimento </p>
                        <input type='text' placeholder='DD/MM/AAAA' />
                    </div>

                    <div id='cpf'> 
                        <p> CPF </p>
                        <input type='text' />
                    </div>

                    <div id='number-phone'> 
                        <p> Número de celular </p>
                        <input type='text'  />
                    </div>

                    <div id='senha'> 
                        <p> Senha  (no minímo 6 caracteres) </p>
                        <input type='text'  />
                    </div>

                    <div id='confirme'> 
                        <p> Confirmar a senha </p>
                        <input type='text'  />
                    </div>

                </div>



                <div className='ter-frame'>
                    <div className='caixas'>
                        <div className='linha1'> 
                            <input type='checkbox'/>
                            <p> Li e aceito a Politica de privacidade do Grupo SmartSeven </p>
                        </div>

                        <div className='linha2'> 
                            <input type='checkbox'/>
                            <p> Receber informações de promoções via SMS </p>
                        </div>
                    </div>

                    <button> Confirmar </button>

                </div>


            </div>

        </div>
    )
}