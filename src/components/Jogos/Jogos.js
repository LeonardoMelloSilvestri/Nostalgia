import './Jogos.css'
import Pong from '../../assets/Pong.png'
import Breakout from '../../assets/Breakout.jpg'
import Asteroids from '../../assets/Asteroids.jpg'
import { useState } from 'react'

const Jogos = () => {
  const [jogos, setJogos] = useState([
    { name: 'Pong', img: Pong, info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores cumque quisquam, assumenda, corrupti nulla repellat atque facere eligendi dolores doloremque enim alias ut tempore dolore quae reprehenderit facilis nisi.', timesPlayed: 0, link: '#', id: 1 },
    { name: 'Breakout', img: Breakout, info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores hic quam enim iure commodi excepturi quaerat alias assumenda corporis sunt numquam exercitationem voluptatum cum unde, id, provident iusto officiis nisi.', timesPlayed: 0, link: '#', id: 2 },
    { name: 'Asteroids', img: Asteroids, info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, repudiandae. Inventore dolorem commodi doloribus obcaecati perferendis voluptates, odio consequatur, quod minus error, temporibus impedit minima explicabo eveniet pariatur quas provident.', timesPlayed: 0, link: '#', id: 3 },
  ]);
  const jogosLen = jogos.length;

  return (
    <div>
      <section>
        <p className="title bolder orange-text text-lighten-1 center">Lista de jogos</p>
        {jogos.map((jogo, i) => (
          <div className="row" key={jogo.id}>
            <br />
            <div className="col m4 s12">
              <img className="responsive-img center-img-small materialboxed" src={jogo.img} alt="" />
            </div>
            <div className="col m8 s12 white-text">
              <h4 className="bold center-small mt-0 mt-20-small">{jogo.name}</h4>
              <p>{jogo.info}</p>
              <p>Jogado {jogo.timesPlayed} vezes. </p>
              <div className="center-small">
                <button className="btn orange lighten-1 mb-30">Jogar <i className="fa fa-gamepad" aria-hidden="true"></i></button>
              </div>
            </div>
            {(jogosLen === i + 1) || <hr className="styled-hr" />}
          </div>
        ))}
      </section>
    </div>
  )
}

export default Jogos;
