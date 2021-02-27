import './Contato.css'

const Contato = () => {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col m6 s12">
            <p className="title center-small bolder orange-text text-lighten-1">Sugestões</p>
            <p className="mt-3 white-text bold">Nos dê sugestões de jogos para adicionarmos a nossa lista, juntos podemos tudo!</p>
          </div>
          <div className="col m6 s12">
            <div className="input-field">
              <input type="text" id="name" />
              <label htmlFor="name" className="bolder white-text">Nome: </label>
            </div>
            <div className="input-field">
              <textarea type="textarea" id="mensagem" className="materialize-textarea" />
              <label htmlFor="mensagem" className="bolder white-text">Mensagem: </label>
            </div>
            <button className="btn btn-contato orange lighten-1 bolder">Enviar!</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato;