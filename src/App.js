import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './components/Board/Board';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/new" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
