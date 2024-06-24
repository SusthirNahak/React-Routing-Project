import { Link } from 'react-router-dom';
import './Home.css'
function Home(){
    return(
        <div className="row p-3">
            <div className="jewelery col">
                <div className='main-title'>
                    JEWELERY
                </div>
                <div>
                    <Link className='btn btn-light' to="jewelery">Shop Now <span className='bi bi-arrow-right'></span></Link>
                </div>
            </div>
            <div className="men-fashion col">
            <div className='main-title'>
                    MEN FASHION
                </div>
                <div>
                    <Link className='btn btn-light' to="men">Shop Now <span className='bi bi-arrow-right'></span></Link>
                </div>
            </div>
            <div className="women-fashion col">
            <div className='main-title'>
                    WOMEN FASHION
                </div>
                <div>
                    <Link className='btn btn-light' to="women">Shop Now <span className='bi bi-arrow-right'></span></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;