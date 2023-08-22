import './index.scss'
import  Carrinho  from '../../public/assets/img/carrinho.png'
import  Logo  from '../../public/assets/img/logo.png'
import  Login  from '../../public/assets/img/login.png'
import  Lupa from '../../public/assets/img/lupa.png'

export default function Cabecalho(){
    return(
        <div className='com-cab'>
            
            <div>
                <img src={Logo}/>
                <div className='text'>
                    <input
                        type='text'
                        placeholder='Buscar'
                    />
                    <img src={Lupa}/>
                </div>

                <div className='login'>
                    <div>
                        <img src={Login}/>
                        <p>Login <br/> minha conta</p>
                    </div>
                    <div>
                        <img src={Carrinho}/>
                        <p>Meus pedidos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}