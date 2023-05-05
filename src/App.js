import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ListPage from './pages/list';
import DetailPage from './pages/detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
