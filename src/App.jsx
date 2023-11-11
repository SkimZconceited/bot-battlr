import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './layouts/Layout';
import BotCollection from './pages/BotCollection';
import ViewBot from './components/ViewBot';

function App() {
  const [bots, setBots] = useState([])
  const [viewBot, setViewBot] = useState(null)

  function fetchBots() {
    fetch('http://localhost:5000/bots', {
      method: 'GET',
    }).then(res => res.json()).then(bots => setBots(bots))
  }

  useEffect(() => {
     fetchBots();
  }, [])

  console.log(viewBot)

  function handleAddViewBot(doc) {
    setViewBot(doc)
    // console.log(doc, 'this is handleAddViewBot')
  }

  function removeViewBot() {
    setViewBot(null)
  }

  return (
    <div>
      <ViewBot doc={viewBot} setDoc={setViewBot} removeViewBot={removeViewBot} />
      <BotCollection bots={bots} handleAddViewBot={handleAddViewBot}  />
    </div>
    // <Router>
    //     <Routes>
    //         <Route path='/' element={<Layout />} >
    //             <Route element={<ViewBot doc={viewBot} setDoc={setViewBot} />} />
    //             <Route index element={<BotCollection bots={bots} handleAddViewBot={handleAddViewBot}  />} />
    //         </Route>
    //     </Routes>
    // </Router>
  )
}

export default App