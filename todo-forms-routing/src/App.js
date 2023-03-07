import './App.css';
import {FormsDashboard} from './Forms/ass' ;
import { LandingPage } from './LandingPage';
import {NavBar} from './NavBar';

import {Todo} from "./TodoApp/todo";


import {MyProfile} from './Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
    
      
    
      {<BrowserRouter>
    
        <Routes>

          <Route path='/' element={<NavBar />}>
            <Route index element={<LandingPage />} />

            

            <Route exact path='todolist' element={<Todo />} />
            

            <Route path='forms' element={<FormsDashboard />} />
            
            
            <Route path='profile' element={<MyProfile />} />

          </Route>








     
        </Routes>
      </BrowserRouter>
     }
     </div>
  );
}

export default App;

