// import { HomePage } from './Pages/home/HomePage';
import HomePage from './Pages/home/HomePage';
import List from './Pages/List/List';
import Hotels from './Pages/Hotels/Hotels';
import { 

  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
    <Route exact path='/hotels' element={<List/>}/>
      <Route exact path='/hotels/:id' element={<Hotels/>}/>
      
    </Routes>
  </BrowserRouter>

  );
}

export default App;
