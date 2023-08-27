import smileLogo from "./img/smile_logo-removebg-preview.png";
import { BiGlobe, BiLogoLinkedin, BiLogoFacebook,BiLogoTwitter} from 'react-icons/bi';
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
            <div className="port-smile-img">
              <img className="smile-logo" src={smileLogo}  alt="smileLogo" />
              Asif
            </div>
            <div className='pages'>
                <a className="page" href="">Home</a>
                <a className="page" href="">Portfolio</a>
                <a className="page" href="">Contact</a>
                <a className="page" href="">About</a>
            </div>
            <div className='icons'>
              <ul>
                <li> 
                  <a href=""><BiGlobe className='icon'/></a> 
                  <a href=""><BiLogoLinkedin className='icon'/></a> 
                  <a href=""><BsList className='icon'/> </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> 
        <div className="hero-section">
          <div className="port-name">
            <div>
              I`m <br /><span className="name">Muhammad Asif</span>
            </div>
            <div className="port-line"> </div>
            <div className="port-paragraph">
              <p>
                A freelancer who provide <br/>
                services for digital programming <br/>
                and design content needs,for <br/>
                all businessess more than <br/>
                10 years of experiense.
              </p>
            </div>
          </div>
          <div className="port-services">
            <div className="sevices">Services</div>
            <div className="ser-paragraph">
              <p> Let's build quality products in <br/>
                programming and design <br/>
                with my services
              </p>
            </div>
            <div className="show-more">
              show more <span></span>
            </div>
            <div className="social-icons">
              <li>
                <a href=""><BiLogoFacebook/></a>
                <a href=""><BiLogoTwitter/></a>
                <a href=""></a>
                <a href=""></a>
              </li>
            </div>
          </div>
        </div> 
      </div>
      <div className="box-2"></div>
          
    </div>
  );
}

export default App;
