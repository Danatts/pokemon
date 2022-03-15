import CardsList from './components/CardsList/CardsList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.styles.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardsList />} />
        <Route path='/:name' />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
