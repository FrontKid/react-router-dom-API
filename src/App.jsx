import { Routes, Route } from 'react-router-dom';

import HomePage from './routes/pages/HomePage';
import BlogPage from './routes/pages/BlogPage';
import AboutPage from './routes/pages/AboutPage';
import NotFoundPage from './routes/pages/NotFoundPage';

import './App.css';
import Layout from './common/layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='blog' element={<BlogPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
