import React  from 'react'
//components & pages

import Home from './pages/Home'
import Nav from './components/Nav'
//global styles

import GlobalStyles from './components/GlobalStyles'
import { Route } from 'react-router-dom'





function App() {
  
  return (
    <div className="App">
    <GlobalStyles />
    <Nav />
    <Route path={["/game/:id" , "/"]}>
      <Home />
    </Route>
    </div>
  );
}

export default App;
