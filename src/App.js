
import './App.css';
import Row from "./Row"
import request from "./request"
import Banner from './Banner';
import Nav from './Nav';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
        tittle="NETFILX ORIGINALS"
        fetchUrl={request.fetchNetfilxOriginals}
        isLargeRow
      />
      
      
      <Row tittle="Trending Now" fetchUrl={request.fetchTrending} />
      <Row tittle="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row tittle="Action Movie" fetchUrl={request.fetchActionMovies }/>
      <Row tittle="Comedy Movie" fetchUrl={request.fetchComedyMovies }/>
      <Row tittle="Horrar movie" fetchUrl={request.fetchHorrorMovies} />
      <Row tittle="Romance Movie" fetchUrl={request.fetchRomanceMovies} />
      <Row tittle="Documentaries" fetchUrl={request.fetchDocumentaries }/>




    </div>
  );
}

export default App;
