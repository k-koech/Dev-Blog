import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './components/blog/Blogs';
import Home from './components/home/Home';
import NoPage from './components/NoPage';
import Layout from './components/Layout';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
