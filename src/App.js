import Navbar from './components/Navbar/Navbar'
import MaisJogados from './components/MaisJogados/MaisJogados'
import Intro from './components/Intro/Intro'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'
import Jogos from './components/Jogos/Jogos'
import Login from './components/Login/Login'
import Floating from './components/Floating/Floating'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <br />
          <Switch >
            <Route exact path="/">
              <Intro />
              <MaisJogados />
              <Contato />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/jogos">
              <Jogos />
            </Route>
          </Switch>
        </div>
        <br />
        <Footer />
        <Floating />
      </div>
    </Router>
  );
}

export default App;
