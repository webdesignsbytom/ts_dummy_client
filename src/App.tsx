import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
    </Routes>
  )
}

export default App;
