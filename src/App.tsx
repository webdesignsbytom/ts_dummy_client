import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
// Modals
import CookieConsentModal from './components/modals/CookieConsentModal';

function App() {
  return (
    <>
      <CookieConsentModal />

      <Routes>
        <Route path='/' index element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
