import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
             <Route path='/project/:id'  element={<ProjectDetails/>} />
        </Routes>
   
      </div>
    </BrowserRouter>
    
  );
}

export default App;
