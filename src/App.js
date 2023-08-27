import { BiSmile, BiGlobe, BiLogoLinkedin} from 'react-icons/bi';
import { BsList } from "react-icons/bs";
import "./App.css";

/* <div className="heading">
        <h1>Personal <span className="yellow">Portfolio</span> Web</h1>
      </div> */

function App() {
  return (
    <div className="main">
      <div className="box-1">
        <nav>
          <div className="port-nav">
            <div><BiSmile className='yellow'/>ASIF</div>
            <div className='pages'>
                <a className="page" href="">Home</a>
                <a className="page" href="">Portfolio</a>
                <a className="page" href="">contact</a>
                <a className="page" href="">About</a>
            </div>
            <div className='icons'>
              <ul>
                <li> <BiGlobe className='icon'/> <BiLogoLinkedin className='icon'/> <BsList className='icon'/> </li>
              </ul>
            </div>
          </div>
        </nav>  
      </div>
      <div className="box-2"></div>
          
    </div>
  );
}

export default App;
