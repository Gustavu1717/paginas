import Logo from '../../assets/images/Logo.png';
import Email from '../../assets/images/email.png';
import senha from '../../assets/images/senha.png';

import './index.scss';


export default function Login() {




  return (
    <div className="pagina-login">
      <div className='login'>
        <img src={Logo} />

      <div className='meio'>
        
        <div className='sep'>  
          <div className='email'>
            <div id='esp'> 
              <img src={Email} />
              <input />
            </div>
          </div>

          <div className='senha'>
            <div id='esp'>
              <img src={senha} />
              <input />
            </div>
          </div>
          <p> Esqueci minha senha </p>
        </div>

        
      </div>

      <div className='bt'>
        <button> CONTINUAR </button>
        <p> Não tem uma conta? Cadastre-se agora </p>
      </div>


      </div>
    </div>
  );
}

