import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <h1>Herndon CSA DEMO</h1>
      <div className="Hello">
        <a href="https://hcsa.tech/" target="_blank" rel="noreferrer">
          <button type="button">Visit our website</button>
        </a>
        <a
          href="https://github.com/HerndonCSA"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">Or our GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
