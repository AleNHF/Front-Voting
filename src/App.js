import logo from './logo.svg';
import './App.css';
import CompShowCandidate from './candidates/ShowCandidates';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompCreateCandidate from './candidates/CreateCandidate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowCandidate/> }/>
          <Route path='/create' element={ <CompCreateCandidate/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
