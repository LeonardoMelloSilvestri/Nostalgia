import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="page-footer indigo">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Nostalgia</h5>
              <p className="grey-text text-lighten-4">Este site está em desenvolvimento, seja compreensível :)</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Redes sociais</h5>
              <ul className="social">
                <div className="row center">
                  <div className="col s3">
                    <li><a className="btn-floating blue pulse"><i className="fa fa-facebook"></i></a><a href="!#"> Facebook</a></li>
                  </div>
                  <div className="col s3">
                    <li><a className="btn-floating pink pulse"><i className="fa fa-instagram"></i></a><a href="!#"> Instagram</a></li>
                  </div>
                  <div className="col s3">
                    <li><a className="btn-floating blue lighten-2 pulse"><i className="fa fa-twitter"></i></a><a href="!#"> Twitter</a></li>
                  </div>
                  <div className="col s3">
                    <li><a className="btn-floating green pulse"><i className="fa fa-whatsapp"></i></a><a href="!#"> Whatsapp</a></li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container center">
            © 2021 Nostalgia
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer;