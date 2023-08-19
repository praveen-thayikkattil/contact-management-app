import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactDetails from './components/ContactDetails';
import EditContact from './components/EditContact';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
        <Route path='/contact/edit/:id' element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
