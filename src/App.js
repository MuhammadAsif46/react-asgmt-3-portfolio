import smileLogo from "./img/smile_logo-removebg-preview.png";
import metaLogo from "./img/meta_pics-removebg-preview.png";
import { BiGlobe, BiLogoLinkedin, BiLogoFacebook,BiLogoTwitter, BiLogoInstagram, BiLogoPinterestAlt, BiArrowBack, BiArrowFromRight, BiArrowToRight} from 'react-icons/bi';
import { BsList ,BsArrowRight } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa";
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
              <ul>
                <li><a className="page" href="">Home</a></li>
                <li><a className="page" href="">Portfolio</a></li>
                <li><a className="page" href="">Contact</a></li>
                <li><a className="page" href="">About</a></li>
              </ul>
            </div>
            <div className='icons'>
              <ul>
                  <li><a className="icon" href=""> <BiGlobe/></a> </li> 
                  <li><a className="icon" href=""> <BiLogoLinkedin/> </a></li> 
                  <li><a className="icon" href=""> <BsList/> </a></li>
              </ul>
            </div>
          </div>
        </nav> 
        <div className="hero-section">
          <div className="port-info">
            <div className="name">
              I`m <br /><span className="name-size">Muhammad Asif</span>
            </div>
            <div className="port-line"> </div>
            <div className="port-paragraph">
              <p className="para">
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
            <div className="service-paragraph">
              <p> Let's build quality products in <br/>
                programming and design <br/>
                with my services
              </p>
            </div>
            <div className="show-more">
              show more <span className="arrow-icon"> <a href=""><BsArrowRight/></a></span>
            </div>
            <div className="social-icons">
              <ul>
                <li><a href=""><BiLogoFacebook/></a></li>
                <li className="social" ><a href=""><BiLogoTwitter/></a></li>
                <li className="social" ><a href=""><BiLogoInstagram/></a></li>
                <li className="social" ><a href=""><BiLogoPinterestAlt/></a></li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
      <div className="port-circle">
        <div className="circle"></div>
      </div>
      <div className="box-2">
        <div className="port-links">
          <div className="meta link">
            hello
            {/* <img src={metaLogo} alt="meta-logo" /> */}
          </div>
          <div className="google link">
            hello
          </div>
          <div className="linked-in link">
            hello
          </div>
          <div className="slack link">
            hello
          </div>
        </div>
      </div>
      
      <div className="box-3">
        <div className="port-needs">
          <div><h2>What Can I Do For <br /> Your Needs</h2></div>
          <div>
            <p>
              It is easier to entrust the work to the <br/>
              experts because they are able to provide <br/>
              the best results with reliable quality
            </p>
          </div>
          <div className="port-projects">
            <div>
              <div>
                <strong className="yellow"> 250+ </strong> <br/>
                project completed
              </div>
              <div>
                <strong className="yellow"> 30+ </strong> <br/>
                contract remote
              </div>
            </div>

            <div>
              
            </div>
          </div>
        </div>

        <div className="port-skills"></div>
      </div>
          
    </div>
  );
}

export default App;
