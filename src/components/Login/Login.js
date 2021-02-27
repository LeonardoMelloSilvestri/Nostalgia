import './Login.css'
import Controller from '../../assets/controller.png'

const Login = () => {
  return (
    <div>
      <div className="container center">
        <img src={Controller} className="controller-img" alt="" />
        <div className="card login-card">
          <div className="card-content">
            <span className="card-title indigo-text bold center">Acessar sua conta</span>
            <div className="input-field">
              <input type="text" id="user" />
              <label htmlFor="user">Usuário:</label>
            </div>
            <div className="input-field">
              <input type="password" id="password" />
              <label htmlFor="password">Senha:</label>
            </div>
            <div className="center">
              <button className="btn btn-login bold orange lighten-1">Log in</button>
            </div>
          </div>
          <div className="card-action grey-text text-darken-1 center">
            <span>Ainda não possui conta?</span><span className="indigo-text bolder"> Cadastre-se</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;