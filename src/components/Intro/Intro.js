import './Intro.css'
import Controller from '../../assets/controller.png'

const Intro = () => {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col m8 s12 white-text">
            <p className="title center-small orange-text text-lighten-1">Seja bem vindo, jogador!</p>
            <p className="bold mt-3">Faça parte dessa aventura, jogue nossas preciosas joias do passado.</p>
            <div className="input-field">
              <div className="row">
                <div className="col m6 s12">
                  <div className="col m10 s12">
                    <input type="email" id="email" />
                    <label htmlFor="email" className="white-text bold">E-mail:</label>
                  </div>
                  <div className="col m2 s12">
                    <button className="btn btn-email bolder transparent">Cadastrar!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col m4 s12 right-align hide-on-small-only">
            <img src={Controller} className="controller" alt=""/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro;