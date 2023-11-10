import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import BotCollection from './pages/BotCollection';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<BotCollection />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default App