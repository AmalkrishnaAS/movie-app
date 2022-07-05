
import './App.css';
import Row from './components/Row';
import requests from './requests'
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
  <div className="App">
    <Navbar />
    <Banner></Banner>
    <Row title='NETFLIX ORIGINALS' fetchurl={requests.fetchNetflixOriginals} islarge={true} />
    <Row title='TRENDING NOW' fetchurl={requests.fetchTrending} />
    <Row title='TOP RATED' fetchurl={requests.fetchTopRated} />
    <Row title='COMEDY MOVIES' fetchurl={requests.fetchComedyMovies} />
    <Row title='ACTION MOVIES' fetchurl={requests.fetchActionMovies} />
    <Row title='HORROR MOVIES' fetchurl={requests.fetchHorrorMovies} />
    <Row title='ROMANCE MOVIES' fetchurl={requests.fetchRomanceMovies} />
    <Row title='HORROR MOVIES' fetchurl={requests.fetchHorrorMovies} />

  </div>
  );
}

export default App;
