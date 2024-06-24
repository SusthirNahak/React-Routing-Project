import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from './components/Home/Home'
import Jewelery from './components/Jewelery/Jewelery'
import Electronics from "./components/Electronics/Electronics";
import MenFashion from "./components/MenFashion/MenFashion";
import WomenFashion from "./components/WomenFashion/WomenFashion";
function App() {
  return (
    <div className="container-fluid">
     <BrowserRouter>
     <header className="d-flex justify-content-between p-4">
      <div className="h3">Shopper</div>
      <nav>
        <span className="mx-2"><Link to={'/'} className="text-decoration-none">Home</Link></span>
        <span className="mx-2"><Link to={'electronics'} className="text-decoration-none">Electronics</Link></span>
        <span className="mx-2"><Link to={'jewelery'} className="text-decoration-none">Jewelery</Link></span>
        <span className="mx-2"><Link to={'men'} className="text-decoration-none">Men Fashion</Link></span>
        <span className="mx-2"><Link to={'women'} className="text-decoration-none">Women Fashion</Link></span>
      </nav>
      <div>
        <span className="bi bi-search mx-2"></span>
        <span className="bi bi-person mx-2"></span>
        <span className="bi bi-heart mx-2"></span>
        <span className="bi bi-cart mx-2"></span>
      </div>
     </header>
     <article className="bg-dark text-white p-2 text-center">
        <span className="bi bi-lightning-fill text-warning"></span>
        <span> HAPPY HOLIDAY DEALS </span>
        <span className="bi bi-lightning-fill text-warning"></span>

     </article>
     <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='jewelery' element={<Jewelery/>}/>
          <Route path="electronics" element={<Electronics/>}/>
          <Route path="men" element={<MenFashion/>} />
          <Route path="women" element={<WomenFashion/>}/>
          <Route path="*" element={<div className="m-5 text-center"><h3 className="text-danger">Not Found</h3><p>Category you requested not found</p></div>}/>  
        </Routes>
     </main>
     </BrowserRouter>
    </div>
  );
}

export default App;
