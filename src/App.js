
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Rezervuaras from './components/rezervuaras';

function App() {

  return (
    <div>
      <Rezervuaras></Rezervuaras>
    </div>
  );
}

export default App;

// let talpa = 0;
// let greitis = 0;
// let laikas = 0;
// let litrai = 0;
// let proc = 100;
// function kiekProcentu (talpa, greitis, laikas) {
//     let litrai = greitis * laikas;
//     let procentai = (litrai * proc) / talpa;
//     return procentai;
// }
// console.log(kiekProcentu(150, 3, 24));