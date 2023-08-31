import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './views/layout.js'
import Home from './views/home.js'
import Contact from './views/contact'
import About from './views/about'
import Projects from './views/projects'

function App() {

  return (<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Projects' element={<Projects/>}/>
      </Route>
    </Routes>
  </BrowserRouter>


  </>
  );
}

export default App;
