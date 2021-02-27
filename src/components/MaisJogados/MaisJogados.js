import './MaisJogados.css'
import Pong from '../../assets/Pong.png'
import Breakout from '../../assets/Breakout.jpg'
import Asteroids from '../../assets/Asteroids.jpg'

const MaisJogados = () => {
  return (
    <section>
      <div className="row">
        <p className="title bolder orange-text text-lighten-1 center">Games mais jogados recentemente</p>
        <div className="col s12 m4">
          <div className="card hoverable">
            <div className="card-image">
              <img className="pong-img responsive-img" src={Pong} />
              <a className="btn-floating halfway-fab pulse waves-effect waves-light orange"><i className="material-icons">videogame_asset</i></a>
            </div>
            <div className="card-content">
              <span className="card-title bolder orange-text text-lighten-1">Pong</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, deserunt est similique eaque possimus fugiat neque molestiae, autem modi incidunt voluptate fugit repellat quisquam. Dolorem quas sapiente maxime et minus.</p>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card hoverable">
            <div className="card-image">
              <img className="breakout-img responsive-img" src={Breakout} />
              <a className="btn-floating halfway-fab pulse waves-effect waves-light orange"><i className="material-icons">videogame_asset</i></a>
            </div>
            <div className="card-content">
              <span className="card-title bolder orange-text text-lighten-1">Breakout</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae et quidem tempora explicabo ratione? Assumenda placeat explicabo quibusdam! Culpa facilis dolor cum quo et ullam voluptatum, ipsa porro eum laborum.</p>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card hoverable">
            <div className="card-image">
              <img className="asteroids-img responsive-img" src={Asteroids} />
              <a className="btn-floating halfway-fab pulse waves-effect waves-light orange"><i className="material-icons">videogame_asset</i></a>
            </div>
            <div className="card-content">
              <span className="card-title bolder orange-text text-lighten-1">Asteroids</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugit, harum ad cupiditate, facere eum rem, aliquid excepturi laborum ea esse libero molestias nam fugiat velit cum repellendus iste dignissimos?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaisJogados;