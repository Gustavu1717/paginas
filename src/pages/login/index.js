import Logo from '../../assets/images/Logo.png'
import './index.scss';

export default function Login() {




  return (
    <div className="pagina-login">
      <div className='login'>
        <img src={Logo} />

      <div className='meio'> 
        <div className='email'>
          <img src='' />
          <input />
        </div>

        <div className='senha'>
          <img src='' />
          <input />
        </div>

        <p> Esqueci minha senha </p>
      </div>

      <div className='bt'>
        <button> Continuar </button>
        <p> Não tem uma conta? Cadastre-se agora </p>
      </div>


      </div>
    </div>
  );
}

