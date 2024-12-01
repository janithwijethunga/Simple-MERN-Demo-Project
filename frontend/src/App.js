import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Patient from './component/Patient'
import Addpatient from './component/Addpatient'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Patient />} />
        <Route path="/addpatient" element={<Addpatient />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
