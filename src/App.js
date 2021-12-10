import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './App.css';
import logo from './assets/images/logo-bookmark.svg';
import logoWhite from './assets/images/logo-white.svg';
import hero from './assets/images/illustration-hero.svg';
import tab1 from './assets/images/illustration-features-tab-1.svg';
import tab2 from './assets/images/illustration-features-tab-2.svg';
import tab3 from './assets/images/illustration-features-tab-3.svg';
import Image1 from './assets/images/logo-chrome.svg';
import Image2 from './assets/images/logo-firefox.svg';
import Image3 from './assets/images/logo-opera.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Card from './component/card'
import Faq from './component/faq/faq';
import facebook from './assets/images/icon-facebook.svg';
import twitter from './assets/images/icon-twitter.svg';


function TabPanel({ value }) {
  switch (value) {
    case 0:
      return <div className="d-flex justify-content-center align-items-center contain w-100">
        <div className="w-50 d-flex justify-content-center align-items-center">
          <img src={tab1} width="500px" height="300px" />
        </div>
        <div className="w-50 d-flex justify-content-center align-items-center flex-column">
          <h4><strong>Bookmark in one click</strong></h4>
          <p className="pera">organize your bookmarks however you like. Our <br />
            simple drag-and-drop interface <br />
            instantly. Try it for free.</p>
          <button className="button">More info</button>
        </div>
      </div>
    case 1:
      return <div className="d-flex justify-content-center align-items-center contain w-100">
        <div className=" w-50 d-flex justify-content-center align-items-center">
          <img src={tab2} width="400px" height="350px" />
        </div>
        <div className="w-50 d-flex justify-content-center align-items-center flex-column">
          <h4><strong>Intelligent search</strong></h4>
          <p className="pera">Our powerful search feature will help you find saved <br />
            sites in no time at all. No need to trawl through all of <br />
            your bookmarks.</p>
          <button className="button">More info</button>
        </div>
      </div>
    case 2:
      return <div className="d-flex justify-content-center align-items-center contain w-100">
        <div className="w-50 d-flex justify-content-center align-items-center">
          <img src={tab3} width="350px" height="300px" />
        </div>
        <div className="w-50 d-flex justify-content-center align-items-center flex-column">
          <h4><strong>Share your bookmark</strong></h4>
          <p className="pera">Easily share your bookmarks and collections with <br />
            others. Create a shareable link that you can send at<br />
            the click of a button.</p>
          <button className="button">More info</button>
        </div>
      </div>
    default: return <div>0</div>
  }
}


function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo} />
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#features">FEATURES</Nav.Link>
              <Nav.Link href="#pricing">PRICING</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
              <Button variant="danger">LOGIN</Button>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div className="d-flex justify-content-between align-items-center contain">
        <div className="container">
          <h1><strong>A Simple Bookmark<br /> Manager</strong></h1>
          <p className="pera">A clean and simple interface to organize your favorite <br />
            websites. Open a new browser tab and see your sites load <br />
            instantly. Try it for free.</p>
          <button className="button">Get it on chrome</button>
          &nbsp;&nbsp;&nbsp;
          <button className="button1">Get it on firefox</button>
        </div>
        <div className="container1">
          <img src={hero} width="500px" height="400px" />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column" >
        <h4><strong>Features</strong></h4>
        <p className="pre">Our aim is to make it quick and easy for you to access your <br />
          favorite websites. Your bookmarks sync between your devices <br />
          so you can access them on the go.</p>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually">
          <Tab label="Simple Bookmarking" />
          <Tab label="Speedy Searching" />
          <Tab label="Easy Sharing" />
        </Tabs>
        <TabPanel value={value} />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column" >
        <h4><strong>Download the intension</strong></h4>
        <p className="pre">We've got more browsers in the pipeline. Please do let us know if<br />
          you've got a favourite you'd like us to prioritize.</p>
      </div>
      <div className="w-50 d-flex justify-content-centre align-items-center w-100" >
        <div className="mr-2 ml-2 w-100 pl-3 ">
          <Card image={Image1}
            text="Chrome"
            pera="62" />
        </div>
        <div className="mr-2 ml-2 w-100 pl-3 ">
          <Card image={Image2}
            text="Firefox"
            pera="55" />
        </div>
        <div className="mr-2 ml-2 w-100 pl-3 ">
          <Card image={Image3}
            text="Opera"
            pera="46"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column contain" >
        <h4><strong>Frequently Asked Questions</strong></h4>
        <p className="pre">Here are some of our FAQS. if you have any questions<br />
        you'd like answered please feel free to email us.</p>
      </div>
      <div className="d-flex justify-content-center align-items-center w-100" >
      <div className="w-50">
      <Faq />
      <div className="d-flex justify-content-center align-items-center mt-5">
      <button className="button5">More info</button>
      </div>
      </div>
      </div>
      <div className="footer">
        <p className="pera4">35.000+ ALREADY JOINED</p>
        <h4 className="head">Stay up-to-date with what <br />
         we're doing</h4>
         <div className=" w-100 d-flex column justify-content-center">
         <input className="email" type="email" id="email" placeholder="Email your email address"/>
         <button className="button6">Contact Us</button>
         </div>
      </div>
      <div className="bottom">
        <div className="d-flex justify-content-center align-items-center w-50">
        <img src={logoWhite} />
        <div className="hook">FEATURES</div>
        <div className="hook">PRICING</div>
        <div className="hook">CONTACT</div>
        </div>
        <div className="d-flex justify-content-center align-items-center w-50">
        <div className="hook">
          <img src={facebook} />
        </div>
        <div className="hook">
          <img src={twitter} />
        </div>
        </div>
         
      </div>
    </div>
  );
}

export default App;
