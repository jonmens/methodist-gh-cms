import React from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter, HashRouter } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <HashRouter basename="methodist-gh-cms">
        <Sidebar />
        <Header />
        <Content />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
